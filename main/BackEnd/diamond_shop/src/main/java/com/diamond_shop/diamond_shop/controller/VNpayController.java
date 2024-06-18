package com.diamond_shop.diamond_shop.controller;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diamond_shop.diamond_shop.dto.PaymentRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.WalletsEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.WalletsRepository;
import com.diamond_shop.diamond_shop.service.VNPayService;

import java.net.URLEncoder;
import java.util.*;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/vnpay")
public class VNpayController {
    
    private String vnp_TmnCode = "S9K655Q6";
    
    private String vnp_HashSecret = "3TGCDR6WEYHTMWFWWY1FMMMG8MVRVL9F";

    private String vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private WalletsRepository walletsRepository;

    @PostMapping("/create_payment")
    public ResponseEntity<?> createPayment(@RequestBody PaymentRequestDTO paymentRequest, HttpServletRequest request) {
        try {
            String vnp_Version = "2.1.0";
            String vnp_Command = "pay";
            String vnp_OrderInfo = paymentRequest.getOrderInfo();
            String orderType = "other";
            String vnp_TxnRef = String.valueOf(System.currentTimeMillis());
            String vnp_IpAddr = getClientIpAddress(request);
            String vnp_TmnCode = this.vnp_TmnCode;

            // Chuyển đổi amount từ String sang BigDecimal rồi nhân với 100
            BigDecimal amountDecimal = new BigDecimal(paymentRequest.getAmount());
            String amount = String.valueOf(amountDecimal.multiply(new BigDecimal(100)).intValue());

            String bankCode = paymentRequest.getBankCode();

            Map<String, String> vnp_Params = new HashMap<>();
            vnp_Params.put("vnp_Version", vnp_Version);
            vnp_Params.put("vnp_Command", vnp_Command);
            vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
            vnp_Params.put("vnp_Amount", amount);
            vnp_Params.put("vnp_CurrCode", "VND");
            vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
            vnp_Params.put("vnp_OrderInfo", vnp_OrderInfo);
            vnp_Params.put("vnp_OrderType", orderType);
            vnp_Params.put("vnp_ReturnUrl", "http://localhost:8081/api/vnpay/payment_return");
            vnp_Params.put("vnp_IpAddr", vnp_IpAddr);
            vnp_Params.put("vnp_Locale", "vn");
            if (bankCode != null && !bankCode.isEmpty()) {
                vnp_Params.put("vnp_BankCode", bankCode);
            }

            // Tạo URL query string
            List<String> fieldNames = new ArrayList<>(vnp_Params.keySet());
            fieldNames.sort(String::compareTo);
            StringBuilder query = new StringBuilder();
            for (String fieldName : fieldNames) {
                String fieldValue = vnp_Params.get(fieldName);
                if ((fieldValue != null) && (fieldValue.length() > 0)) {
                    query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                    query.append('=');
                    query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                    query.append('&');
                }
            }
            query.deleteCharAt(query.length() - 1);

            // Tạo mã HMAC SHA512
            String queryUrl = query.toString();
            String vnp_SecureHash = VNPayService.hmacSHA512(vnp_HashSecret, queryUrl);
            String paymentUrl = vnp_Url + "?" + queryUrl + "&vnp_SecureHash=" + vnp_SecureHash;

            Map<String, String> response = new HashMap<>();
            response.put("paymentUrl", paymentUrl);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return new ResponseEntity<>("Error creating payment: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private String getClientIpAddress(HttpServletRequest request) {
        String remoteAddr = "";

        if (request != null) {
            remoteAddr = request.getHeader("X-FORWARDED-FOR");
            if (remoteAddr == null || remoteAddr.isEmpty()) {
                remoteAddr = request.getRemoteAddr();
            }
        }

        return remoteAddr;
    }

    @GetMapping("/payment_return")
    public ResponseEntity<?> paymentReturn(HttpServletRequest request) {
        // Xử lý phản hồi từ VNPAY sau khi thanh toán
        Map<String, String[]> paramMap = request.getParameterMap();
        Map<String, String> vnp_Params = new HashMap<>();
        for (Map.Entry<String, String[]> entry : paramMap.entrySet()) {
            vnp_Params.put(entry.getKey(), entry.getValue()[0]);
        }
        String vnp_SecureHash = vnp_Params.get("vnp_SecureHash");
        if (vnp_SecureHash != null) {
            vnp_Params.remove("vnp_SecureHash");
            String signValue = VNPayService.hmacSHA512(vnp_HashSecret, VNPayService.bytesToHex(vnp_Params.toString().getBytes()));
            if (signValue.equals(vnp_SecureHash)) {
                // Xử lý khi thanh toán thành công
                String responseCode = vnp_Params.get("vnp_ResponseCode");
                if ("00".equals(responseCode)) {
                    // Thanh toán thành công
                    Long userId = Long.valueOf(vnp_Params.get("vnp_TxnRef")); // Lưu userId vào vnp_TxnRef khi tạo URL thanh toán
                    Optional<AccountEntity> user = accountRepository.findById(userId);
                    if (user.isPresent()) {
                        WalletsEntity wallet = walletsRepository.findByCustomer_id(user.get().getId()).orElse(null);
                        if (wallet != null) {
                            // Chuyển đổi balance của ví từ String sang BigDecimal
                            BigDecimal currentBalance = new BigDecimal(wallet.getBalance());
                            BigDecimal amount = new BigDecimal(vnp_Params.get("vnp_Amount")).divide(new BigDecimal(100));
                            BigDecimal newBalance = currentBalance.add(amount);
                            // Cập nhật balance mới và lưu lại dưới dạng String
                            wallet.setBalance(newBalance.toString());
                            walletsRepository.save(wallet);
                        }
                    }
                    return new ResponseEntity<>("Payment success", HttpStatus.OK);
                } else {
                    // Thanh toán không thành công
                    return new ResponseEntity<>("Payment failed", HttpStatus.BAD_REQUEST);
                }
            }
        }
        return new ResponseEntity<>("Invalid checksum", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody AccountEntity user) {
        if (accountRepository.findByUsername(user.getUsername()) == null) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            user.setPassword(encoder.encode(user.getPassword()));
            accountRepository.save(user);
            WalletsEntity wallet = new WalletsEntity(user, "0.00", LocalDateTime.now().toString());
            walletsRepository.save(wallet);
        }
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }
}
