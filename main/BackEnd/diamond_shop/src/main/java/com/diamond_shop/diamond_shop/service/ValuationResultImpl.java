package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.repository.ProcessResultRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;

@Service
public class ValuationResultImpl implements ValuationResultService {
    @Autowired
    ValuationResultRepository valuationResultRepository;
    @Autowired
    ValuationRequestRepository valuationRequestRepository;
    @Autowired
    private ProcessResultRepository processResultRepository;

    @Override
    public String valuateDiamond(ValuationResultDTO valuationResultDTO) {
        ValuationResultEntity valuationResult = valuationResultRepository.findById(valuationResultDTO.getId());
        valuationResult.setOrigin(valuationResultDTO.getOrigin());
        valuationResult.setShape(valuationResultDTO.getShape());
        valuationResult.setCarat_weight(valuationResultDTO.getCarat_weight());
        valuationResult.setColor(valuationResultDTO.getColor());
        valuationResult.setCut(valuationResultDTO.getCut());
        valuationResult.setClarity(valuationResultDTO.getClarity());
        valuationResult.setMeasurements(valuationResultDTO.getMeasurements());
        valuationResult.setPolish(valuationResultDTO.getPolish());
        valuationResult.setSymmetry(valuationResultDTO.getSymmetry());
        valuationResult.setFluorescence(valuationResultDTO.getFluorescence());
        valuationResult.setProportions(valuationResultDTO.getProportions());
        valuationResult.setPrice(valuationResultDTO.getPrice());
        valuationResultRepository.save(valuationResult);

        ProcessResultEntity processResult = processResultRepository.findByValuationResultId(valuationResultDTO.getId());
        processResult.setName("Valuated");
        processResultRepository.save(processResult);

        return "Valuate successful!";
    }

    @Override
    public String assignForValuationStaff(ProcessRequestEntity processRequest) {
        ValuationRequestEntity valuationRequestEntity = valuationRequestRepository.findById(processRequest.getValuationRequestId().getId());
        Date createdDate = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(createdDate);
        calendar.add(Calendar.DAY_OF_MONTH, 1);
        Date sealingDate = calendar.getTime();
        ValuationResultEntity valuationResultEntity = new ValuationResultEntity(
                valuationRequestEntity,
                createdDate,
                sealingDate,
                "", "", new BigDecimal(0), "", "", "", "", "", "", "", "", new BigDecimal(0));
        valuationResultRepository.save(valuationResultEntity);
        return "Assigned successfully!";
    }

    @Override
    public boolean checkSealingDate(int valuationResultId) {
        ValuationResultEntity valuationResult = valuationResultRepository.findById(valuationResultId);
        if (valuationResult == null)
            return false;
        Date currentDate = new Date();
        if (currentDate.after(valuationResult.getSealing_time())) {
            ProcessResultEntity processResult = processResultRepository.findByValuationResultId(valuationResultId);
            if (!processResult.getName().equals("Overdue")) {
                processResult.setName("Overdue");
                processResultRepository.save(processResult);
            }
            return true;
        }
        return false;
    }

}
