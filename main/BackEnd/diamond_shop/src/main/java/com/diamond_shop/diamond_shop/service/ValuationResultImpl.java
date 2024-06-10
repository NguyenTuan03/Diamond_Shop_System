package com.diamond_shop.diamond_shop.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;
@Service
public class ValuationResultImpl implements ValuationResultService {
    @Autowired
    ValuationResultRepository valuationResultRepository;
    @Autowired
    ValuationRequestRepository valuationRequestRepository;
    @Override
    public void valuateDiamond(ValuationResultDTO valuationResultDTO) {
        
    }

    @Override
    public String asignForValuationStaff(int requestId) {
        ValuationRequestEntity valuationRequestEntity = valuationRequestRepository.findById(requestId);
        Date createdDate = new Date();
        ValuationResultEntity valuationResultEntity = new ValuationResultEntity(
            valuationRequestEntity,
            createdDate,
            createdDate
        );
        valuationResultRepository.save(valuationResultEntity);
        return "Assigned successfully!";
    }
    
}
