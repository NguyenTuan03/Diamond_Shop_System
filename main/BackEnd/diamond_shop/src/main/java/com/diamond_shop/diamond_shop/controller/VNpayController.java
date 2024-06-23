package com.diamond_shop.diamond_shop.controller;

import java.io.IOException;
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

import com.diamond_shop.diamond_shop.dto.VNpayResponseDTO;
import com.diamond_shop.diamond_shop.pojo.ResponseObjectPojo;
import com.diamond_shop.diamond_shop.service.PaymentService;
import com.diamond_shop.diamond_shop.service.VNPayService;
import com.diamond_shop.diamond_shop.service.ValuationRequestService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/vnpay")
public class VNpayController {
    @Autowired
    private ValuationRequestService valuationRequestService;

    @Autowired
    private PaymentService paymentService;

    private String vnp_TmnCode = "S9K655Q6";

    private String vnp_HashSecret = "3TGCDR6WEYHTMWFWWY1FMMMG8MVRVL9F";

    private String vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";

    private String success_Url = "http://localhost:5173";

    private String failed_Url = "http://localhost:5173/diamond-service";

    private String return_Url = "http://localhost:8081/api/vnpay/payment_return";

    @GetMapping("/create")
    public String createPayment(
        @RequestParam long amount, 
        @RequestParam String orderInfo, 
        @RequestParam String orderType, 
        HttpServletRequest request,
        HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Content-Type", "text/plain");
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
        vnpParams.put("vnp_ReturnUrl",return_Url);
        String clientIpAddress =VNPayService.getClientIpAddress(request);
        vnpParams.put("vnp_IpAddr", clientIpAddress);
        String createDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        vnpParams.put("vnp_CreateDate", createDate);

        String expireDate = LocalDateTime.now().plusMinutes(15).format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        vnpParams.put("vnp_ExpireDate", expireDate);

        String secureHash = VNPayService.generateSecureHash(vnp_HashSecret, vnpParams);
        vnpParams.put("vnp_SecureHash", secureHash);

        String queryString = VNPayService.createQueryString(vnpParams);

        return vnp_Url + "?" + queryString;
    }

    @GetMapping("/payment_return")
    public ResponseObjectPojo<VNpayResponseDTO> payCallbackHandler(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        String status = request.getParameter("vnp_ResponseCode");
        if ("00".equals(status)) {
            response.sendRedirect(success_Url);
            // int paymentId = paymentService.createPayment(id);
            // valuationRequestService.makeRequest(pendingId,serviceId,paymentId);
            return new ResponseObjectPojo<>(HttpStatus.OK, "Success", new VNpayResponseDTO("00", "Success", return_Url));
        }
        else {
            response.sendRedirect(failed_Url);
            return new ResponseObjectPojo<>(HttpStatus.OK, "Success", new VNpayResponseDTO("01", "Failed", failed_Url));
        }
    }
}
