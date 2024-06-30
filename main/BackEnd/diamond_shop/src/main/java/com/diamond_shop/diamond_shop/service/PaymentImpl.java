package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PaymentEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class PaymentImpl implements PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private AccountRepository accountRepository;

    public PaymentImpl(PaymentRepository paymentRepository, AccountRepository accountRepository) {
        this.paymentRepository = paymentRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public int createPayment(int userid, 
        String created_date, 
        String bank, 
        String amount, 
        String transactionNo,
        String orderInfo) {

        AccountEntity accountEntity = accountRepository.findById(userid).orElse(null);

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        Date createdDate = null;
        try {
            createdDate = dateFormat.parse(created_date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        int amountInt = Integer.parseInt(amount);
        
        if (accountEntity == null) {
            throw new IllegalArgumentException("User not found with id: " + userid);
        }

        PaymentEntity paymentEntity = new PaymentEntity(
                accountEntity,
                createdDate,
                bank,
                amountInt,
                transactionNo,
                orderInfo
        );

        paymentRepository.save(paymentEntity);
        return paymentEntity.getId();
    }   
    
}
