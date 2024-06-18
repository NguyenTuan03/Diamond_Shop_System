package com.diamond_shop.diamond_shop.service;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.util.*;

public class VNPayService {
    public static String hmacSHA512(String key, String data) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] hmacSha512 = md.digest(data.getBytes("UTF-8"));
            return bytesToHex(hmacSha512);
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            throw new RuntimeException("Error while creating HMAC SHA-512", e);
        }
    }

    public static String bytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }

    // public static String createVNPayPaymentUrl(String vnp_TmnCode, String vnp_HashSecret, String vnp_Url,
    //                                            String amount, String orderInfo, String bankCode) throws UnsupportedEncodingException {
    //     String vnp_Version = "2.1.0";
    //     String vnp_Command = "pay";
    //     String vnp_OrderType = "other";
    //     String vnp_Locale = "vn";
    //     String vnp_CurrCode = "VND";

    //     Map<String, String> vnp_Params = new HashMap<>();
    //     vnp_Params.put("vnp_Version", vnp_Version);
    //     vnp_Params.put("vnp_Command", vnp_Command);
    //     vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
    //     vnp_Params.put("vnp_Amount", String.valueOf(Integer.parseInt(amount) * 100));
    //     vnp_Params.put("vnp_CurrCode", vnp_CurrCode);
    //     vnp_Params.put("vnp_TxnRef", String.valueOf(System.currentTimeMillis()));
    //     vnp_Params.put("vnp_OrderInfo", orderInfo);
    //     vnp_Params.put("vnp_OrderType", vnp_OrderType);
    //     vnp_Params.put("vnp_Locale", vnp_Locale);
    //     vnp_Params.put("vnp_ReturnUrl", "http://localhost:8081/api/vnpay/payment_return");
    //     vnp_Params.put("vnp_IpAddr", "127.0.0.1");
    //     vnp_Params.put("vnp_CreateDate", new java.text.SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));

    //     if (bankCode != null && !bankCode.isEmpty()) {
    //         vnp_Params.put("vnp_BankCode", bankCode);
    //     }

    //     List<String> fieldNames = new ArrayList<>(vnp_Params.keySet());
    //     Collections.sort(fieldNames);
    //     StringBuilder hashData = new StringBuilder();
    //     StringBuilder query = new StringBuilder();
    //     for (String fieldName : fieldNames) {
    //         String fieldValue = vnp_Params.get(fieldName);
    //         if ((fieldValue != null) && (fieldValue.length() > 0)) {
    //             query.append(URLEncoder.encode(fieldName, "UTF-8"));
    //             query.append('=');
    //             query.append(URLEncoder.encode(fieldValue, "UTF-8"));
    //             hashData.append(fieldName);
    //             hashData.append('=');
    //             hashData.append(fieldValue);
    //             hashData.append('&');
    //         }
    //     }
    //     query.deleteCharAt(query.length() - 1);
    //     hashData.deleteCharAt(hashData.length() - 1);
    //     String queryUrl = query.toString();
    //     String vnp_SecureHash = hmacSHA512(vnp_HashSecret, hashData.toString());
    //     queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
    //     return vnp_Url + "?" + queryUrl;
    // }
}
