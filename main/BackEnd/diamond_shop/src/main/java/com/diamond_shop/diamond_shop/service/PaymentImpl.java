package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PaymentEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PaymentImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final AccountRepository accountRepository;

    public PaymentImpl(PaymentRepository paymentRepository, AccountRepository accountRepository) {
        this.paymentRepository = paymentRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public int createPayment(int customerId) {
        AccountEntity accountEntity = accountRepository.findById(customerId).orElse(null);
        Date createdDate = new Date();
        PaymentEntity paymentEntity = new PaymentEntity(
                accountEntity,
                createdDate,
                "VNpay"
        );
        paymentRepository.save(paymentEntity);
        return paymentEntity.getId();
    }
}
