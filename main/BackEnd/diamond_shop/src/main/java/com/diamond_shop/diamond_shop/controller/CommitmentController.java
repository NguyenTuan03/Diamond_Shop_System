package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.CommitmentLetterEntity;
import com.diamond_shop.diamond_shop.service.CommitmentImpl;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
// @RequestMapping("mana/commitment")
public class CommitmentController {

    private final CommitmentImpl commitmentImpl;

    public CommitmentController(CommitmentImpl commitmentImpl) {
        this.commitmentImpl = commitmentImpl;
    }

    @PostMapping(path = "manager/commitment/create")
    public String createCommitmentByValuationRequestId(@RequestParam("valuationRequestId") int valuationRequestId) {
        return commitmentImpl.createCommitmentByValuationRequestId(valuationRequestId);
    }

    @GetMapping(path = "api/commitment/get/all")
    public Page<CommitmentLetterEntity> getAll(@RequestParam("page") int page) {
        return commitmentImpl.findAll(page);
    }
}
