package com.diamond_shop.diamond_shop.service;


import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PaymentEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.PaymentRepository;

@Service
public class PaymentImpl implements PaymentService{
    @Autowired
    PaymentRepository paymentRepository;

    @Override
    public String createPayment(String username,int requestId) {
        AccountEntity accountEntity = paymentRepository.findByUsername(username);
        ValuationRequestEntity valuationRequestEntity = paymentRepository.findByValuationRequest(requestId);
        Date createdDate = new Date();
        PaymentEntity paymentEntity = new PaymentEntity(
            accountEntity, 
            valuationRequestEntity,
            createdDate,
            "VNpay");
        paymentRepository.save(paymentEntity);
        return null;
    }
}
