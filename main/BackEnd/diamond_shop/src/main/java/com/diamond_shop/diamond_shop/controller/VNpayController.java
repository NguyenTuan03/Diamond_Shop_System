package com.diamond_shop.diamond_shop.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.diamond_shop.diamond_shop.dto.PaymentRequestDTO;
import com.diamond_shop.diamond_shop.pojo.ResponseObjectPojo;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.WalletsRepository;
import com.diamond_shop.diamond_shop.service.VNPayService;

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

    @GetMapping("/create")
    public String createPayment(@RequestParam long amount, @RequestParam String orderInfo, @RequestParam String orderType, HttpServletRequest request) {
        Map<String, String> vnpParams = new HashMap<>();
        String vnpTxnRef = String.valueOf(System.currentTimeMillis());

        vnpParams.put("vnp_Version", "2.1.0");
        vnpParams.put("vnp_Command", "pay");
        vnpParams.put("vnp_TmnCode", vnp_TmnCode);
        vnpParams.put("vnp_Amount", String.valueOf(amount * 100));
        vnpParams.put("vnp_CurrCode", "VND");
        vnpParams.put("vnp_TxnRef", vnpTxnRef);
        vnpParams.put("vnp_OrderInfo", orderInfo);
        vnpParams.put("vnp_OrderType", orderType);
        vnpParams.put("vnp_Locale", "vn");
        vnpParams.put("vnp_ReturnUrl", "http://localhost:8081/api/vnpay/payment_return");
        String clientIpAddress = getClientIpAddress(request);
        vnpParams.put("vnp_IpAddr", clientIpAddress);
        String createDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        vnpParams.put("vnp_CreateDate", createDate);

        String expireDate = LocalDateTime.now().plusMinutes(15).format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        vnpParams.put("vnp_ExpireDate", expireDate);

        // Generate secure hash
        String secureHash = VNPayService.generateSecureHash(vnp_HashSecret, vnpParams);
        vnpParams.put("vnp_SecureHash", secureHash);

        // Create query string
        String queryString = VNPayService.createQueryString(vnpParams);

        return vnp_Url + "?" + queryString;
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
    public ResponseObjectPojo<PaymentRequestDTO> payCallbackHandler(HttpServletRequest request) {
        String status = request.getParameter("vnp_ResponseCode");
        if (status.equals("00")) {
            return new ResponseObjectPojo<>(HttpStatus.OK, "Success", new PaymentRequestDTO("00", "Success", ""));
        } else {
            return new ResponseObjectPojo<>(HttpStatus.BAD_REQUEST, "Failed", null);
        }
    }
    
}
