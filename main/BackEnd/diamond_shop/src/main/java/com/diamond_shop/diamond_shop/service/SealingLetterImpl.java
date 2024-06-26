package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.ProcessRequestRepository;
import com.diamond_shop.diamond_shop.repository.SealingLetterRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class SealingLetterImpl implements SealingLetterService {

    @Autowired
    SealingLetterRepository sealingLetterRepository;

    //    @Autowired
//    RoleRepository roleRepository;
//
//    @Autowired
//    AccountRepository accountRepository;
//
    @Autowired
    ValuationRequestRepository valuationRequestRepository;
    @Autowired
    private ProcessRequestRepository processRequestRepository;

    //
//    @Autowired
//    ProcessRequestRepository processRequestRepository;
//
//    @Override
//    public Page<SealingLetterEntity> getAllSealingLetters(int page) {
//        int pageNumber = --page, pageSize = 5;
//        return sealingLetterRepository.findAll(PageRequest.of(pageNumber, pageSize));
//    }
//
    @Override
    public String createSealingLetter(int valuationRequestId) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.findById(valuationRequestId);
        if (valuationRequest.isEmpty())
            return "Cannot find valuation request";
        if (sealingLetterRepository.findByValuationRequestId(valuationRequestId).isPresent())
            return "Sealing letter already exists";
        SealingLetterEntity sealingLetter = new SealingLetterEntity(
                "This sealing letter was created because the customer doesn't come to get their diamond and valuation result 30 days after the date Diamondval has announced that your valuation was finished",
                new Date(),
                valuationRequest.get());
        sealingLetterRepository.save(sealingLetter);
        return "Create sealing letter successful";
    }
//
//    @Override
//    public String checkSealingDate(int valuationRequestId) {
//        ValuationRequestEntity valuationRequest = valuationRequestRepository.findById(valuationRequestId);
//        if (valuationRequest == null)
//            return "Not found valuation request";
//
//        Date currentDate = new Date();
//        if (currentDate.after(valuationRequest.getSealingDate())) {
//            ProcessRequestEntity processRequest = processRequestRepository.findByValuationRequestId(valuationRequestId);
//            if (!processRequest.getName().equals("Overdue") && !processRequest.getName().equals("Finished") && !processRequest.getName().equals("Customer Received")) {
//                processRequest.setName("Overdue");
//                processRequestRepository.save(processRequest);
//                createSealingLetter(valuationRequestId);
//                return "Create sealing letter";
//            } else return "Already created sealing letter";
//        } else return "Sealing date not overdue";
//    }
}
