package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ValuationReceiptEntity;
import com.diamond_shop.diamond_shop.service.ValuationReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/valuation-receipt")
public class ValuationReceiptController {

//    @Autowired
//    private ValuationReceiptService valuationReceiptService;
//
//    @GetMapping(path = "/get/all")
//    public String getAllValuationReceipt() {
//
//        return null;
//    }
//
//    @GetMapping(path = "/get")
//    public Optional<ValuationReceiptEntity> getByValuationRequestId(@RequestParam("valuation-request-id") int valuationRequestId) {
//        return valuationReceiptService.findByValuationRequestId(valuationRequestId);
//    }
}
