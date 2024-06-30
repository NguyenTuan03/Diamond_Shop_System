package com.diamond_shop.diamond_shop.service;

public interface PaymentService {
   int createPayment(
      int userid, 
      String created_date, 
      String bank, 
      String amount, 
      String transactionNo,
      String orderInfo);
}
