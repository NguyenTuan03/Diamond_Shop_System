package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

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
    public String assignForValuationStaff(ProcessRequestEntity processRequest) {
        ValuationRequestEntity valuationRequestEntity = valuationRequestRepository.findById(processRequest.getValuationRequestId().getId());
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
