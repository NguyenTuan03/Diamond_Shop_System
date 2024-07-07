package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.CommitmentLetterEntity;
import com.diamond_shop.diamond_shop.service.CommitmentImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/commitment")
@RequiredArgsConstructor
public class CommitmentController {

    private final CommitmentImpl commitmentImpl;

    @PostMapping(path = "/create")
    public String createCommitmentByValuationRequestId(@RequestParam("valuationRequestId") int valuationRequestId) {
        return commitmentImpl.createCommitmentByValuationRequestId(valuationRequestId);
    }

    @GetMapping(path = "/get/all")
    public Page<CommitmentLetterEntity> getAll(@RequestParam("page") int page) {
        return commitmentImpl.findAll(page);
    }

    @GetMapping(path = "/customer/get/all")
    public Page<CommitmentLetterEntity> getAllByCustomerId(@RequestParam("page") int page, @RequestParam("id") int customerId) {
        return commitmentImpl.findAllByCustomerId(page, customerId);
    }
}
