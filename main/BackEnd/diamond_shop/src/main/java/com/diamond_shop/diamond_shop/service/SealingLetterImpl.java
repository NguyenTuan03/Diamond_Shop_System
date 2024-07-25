package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.SealingLetterRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SealingLetterImpl implements SealingLetterService {

    private final SealingLetterRepository sealingLetterRepository;
    private final ValuationRequestRepository valuationRequestRepository;

    @Override
    public Page<SealingLetterEntity> getAllSealingLetters(int page) {
        int pageNumber = --page, pageSize = 5;
        return sealingLetterRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by("createdDate").descending()));
    }

    @Override
    public Page<SealingLetterEntity> getAllSealingLettersByCustomerId(int page, int customerId) {
        int pageNumber = --page, pageSize = 5;
        return sealingLetterRepository.findAllByCustomerId(PageRequest.of(pageNumber, pageSize, Sort.by("createdDate").descending()), customerId);
    }

    @Override
    public String createSealingLetter(int valuationRequestId) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.getById(valuationRequestId);
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
}
