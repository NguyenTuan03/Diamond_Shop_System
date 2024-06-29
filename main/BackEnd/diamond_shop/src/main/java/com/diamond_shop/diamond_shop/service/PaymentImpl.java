package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PaymentEntity;
import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import com.diamond_shop.diamond_shop.pojo.VNpayBillPojo;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.PaymentRepository;
import com.diamond_shop.diamond_shop.repository.ServiceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PaymentImpl implements PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ServiceRepository serviceRepository;

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

    @Override
    public List<VNpayBillPojo> getTransaction(int customerId, int serviceId) {
        AccountEntity accountEntity = accountRepository.findById(customerId).orElse(null);
        List<PaymentEntity> paymentEntities = paymentRepository.findByCustomerId(customerId);
        ServiceEntity serviceEntity = serviceRepository.findById(serviceId).orElse(null);
        List<VNpayBillPojo> transactions = new ArrayList<>();
        for (PaymentEntity paymentEntity : paymentEntities) {
            VNpayBillPojo vNpayBillPojo = new VNpayBillPojo(
                accountEntity.getFullname(),
                paymentEntity.getCreatedDate(),
                paymentEntity.getType(),
                serviceEntity.getPrice(),
                serviceEntity.getName()
            );
            transactions.add(vNpayBillPojo);
        }
    return transactions;
    }
    
}
