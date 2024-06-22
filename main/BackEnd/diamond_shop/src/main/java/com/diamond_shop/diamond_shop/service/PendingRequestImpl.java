package com.diamond_shop.diamond_shop.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diamond_shop.diamond_shop.dto.PendingRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.PendingRepository;

@Service
public class PendingRequestImpl implements PendingRequestService{
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PendingRepository pendingRepository;

    @Override
    public int makePendingRequest(PendingRequestDTO pendingRequestDTO) {
        
        AccountEntity acc = accountRepository.findById(pendingRequestDTO.getCustomerId()).orElse(null);
        if (acc == null)
            return 0;
        Date createdDate = new Date();
        PendingRequestsEntity pendingRequestsEntity = new PendingRequestsEntity(
            acc,
            pendingRequestDTO.getDescription(),
            createdDate
        );
        pendingRepository.save(pendingRequestsEntity);
        return pendingRequestsEntity.getId();

    }
    
}
