package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.pojo.VNpayBillPojo;
import com.diamond_shop.diamond_shop.repository.ProcessRequestRepository;
import com.diamond_shop.diamond_shop.service.PaymentService;
import com.diamond_shop.diamond_shop.service.VNPayService;
import com.diamond_shop.diamond_shop.service.ValuationRequestService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/vnpay")
public class VNpayController {
    private final ValuationRequestService valuationRequestService;

    private final PaymentService paymentService;

    private final ProcessRequestRepository processRequestRepository;

    public VNpayController(
            ValuationRequestService valuationRequestService,
            PaymentService paymentService,
            ProcessRequestRepository processRequestRepository) {
        this.valuationRequestService = valuationRequestService;
        this.paymentService = paymentService;
        this.processRequestRepository = processRequestRepository;
    }

    @Value("${frontend_url}")
    String frontendUrl;
    @Value("${backend_url}")
    String backendUrl;

    @GetMapping("/create")
    public String createPayment(
            @RequestParam long amount,
            @RequestParam String orderInfo,
            @RequestParam String orderType,
            @RequestParam int serviceId,
            @RequestParam int customerId,
            @RequestParam int pendingRequestId,
            HttpServletRequest request,
            HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Content-Type", "text/plain");
        Map<String, String> vnpParams = new HashMap<>();
        String vnpTxnRef = String.valueOf(System.currentTimeMillis());
        vnpParams.put("vnp_Version", "2.1.0");
        vnpParams.put("vnp_Command", "pay");
        String vnp_TmnCode = "S9K655Q6";
        vnpParams.put("vnp_TmnCode", vnp_TmnCode);
        vnpParams.put("vnp_Amount", String.valueOf(amount * 100));
        vnpParams.put("vnp_CurrCode", "VND");
        vnpParams.put("vnp_TxnRef", vnpTxnRef);
        vnpParams.put("vnp_OrderInfo", orderInfo);
        vnpParams.put("vnp_OrderType", orderType);
        vnpParams.put("vnp_Locale", "vn");

        vnpParams.put("vnp_ReturnUrl", backendUrl + "/api/vnpay/create-valuation-request" + "?customerId=" + customerId + "&serviceId=" + serviceId + "&pendingRequestId=" + pendingRequestId);
        String clientIpAddress = VNPayService.getClientIpAddress(request);
        vnpParams.put("vnp_IpAddr", clientIpAddress);
        String createDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        vnpParams.put("vnp_CreateDate", createDate);

        System.out.println(LocalDateTime.now());
        ZonedDateTime expireDateUTC = LocalDateTime.now().plusMinutes(15).atZone(ZoneId.of("UTC"));
        vnpParams.put("vnp_ExpireDate", expireDateUTC.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")));
        System.out.println(expireDateUTC);

        String vnp_HashSecret = "3TGCDR6WEYHTMWFWWY1FMMMG8MVRVL9F";
        String secureHash = VNPayService.generateSecureHash(vnp_HashSecret, vnpParams);
        vnpParams.put("vnp_SecureHash", secureHash);

        String queryString = VNPayService.createQueryString(vnpParams);

        String vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        return vnp_Url + "?" + queryString;
    }

    @GetMapping("/create-valuation-request")
    public String returnPayment(
            @RequestParam Map<String, String> params,
            @RequestParam("customerId") int customerId,
            @RequestParam("serviceId") int serviceId,
            @RequestParam("pendingRequestId") int pendingRequestId,
            HttpServletResponse response,
            HttpServletRequest request) throws IOException {

        String status = request.getParameter("vnp_ResponseCode");
        String created_date = request.getParameter("vnp_PayDate");
        String bank = request.getParameter("vnp_BankCode");
        String amount = request.getParameter("vnp_Amount");
        String transactionNo = request.getParameter("vnp_BankTranNo");
        String orderInfo = request.getParameter("vnp_OrderInfo");

        if ("00".equals(status)) {
            int paymentId = paymentService.createPayment(customerId, created_date, bank, amount, transactionNo, orderInfo);

            valuationRequestService.makeRequest(pendingRequestId, serviceId, paymentId);

            ProcessRequestEntity processRequest = processRequestRepository.findByPendingRequestId(pendingRequestId);
            processRequest.setStatus("Paid");
            processRequestRepository.save(processRequest);

            response.sendRedirect(frontendUrl + "/?" + VNPayService.createQueryString(params));
            return "success";
        } else {
            response.sendRedirect(frontendUrl + "/?" + VNPayService.createQueryString(params));
            return "Fail";
        }
    }

    @GetMapping(path = "/get")
    public List<VNpayBillPojo> getTransaction(@RequestParam("id") int id) {
        return paymentService.getTransaction(id);
    }
}
