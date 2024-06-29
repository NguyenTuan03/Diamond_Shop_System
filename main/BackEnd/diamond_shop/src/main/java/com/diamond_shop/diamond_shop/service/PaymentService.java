package com.diamond_shop.diamond_shop.service;

import java.util.List;

import com.diamond_shop.diamond_shop.pojo.VNpayBillPojo;

public interface PaymentService {
   int createPayment(int userid);
   List<VNpayBillPojo> getTransaction(int customerId, int serviceId);
}
