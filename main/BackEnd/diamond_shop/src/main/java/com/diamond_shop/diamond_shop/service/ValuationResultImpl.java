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
    public String valuateDiamond(ValuationResultDTO valuationResultDTO) {
        ValuationResultEntity valuationResultEntity = new ValuationResultEntity(
            valuationResultDTO.getValuationRequestId(),
            valuationResultDTO.getCreatedDate(),
            valuationResultDTO.getSealing_time(),
            valuationResultDTO.getOrigin(),
            valuationResultDTO.getShape(),
            valuationResultDTO.getCarat_weight(),
            valuationResultDTO.getColor(),
            valuationResultDTO.getCut(),
            valuationResultDTO.getClarity(),
            valuationResultDTO.getMeasurements(),
            valuationResultDTO.getPolish(),
            valuationResultDTO.getSymmetry(),
            valuationResultDTO.getFluorescence(),
            valuationResultDTO.getProportions()
        );
        valuationResultRepository.save(valuationResultEntity);
        return "Valuate successful!";
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
