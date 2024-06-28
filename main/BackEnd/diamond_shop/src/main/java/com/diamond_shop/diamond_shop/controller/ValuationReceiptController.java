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

    @Autowired
    ValuationReceiptService valuationReceiptService;

    @GetMapping(path = "/valuation-request/get")
    public Optional<ValuationReceiptEntity> getValuationReceiptByValuationRequestId(@RequestParam("id") int id) {
        return valuationReceiptService.findByValuationRequestId(id);
    }

    @PostMapping(path = "/create")
    public String createValuationReceiptByValuationRequestId(@RequestParam("valuationRequestId") int valuationRequestId) {
        return valuationReceiptService.createReceipt(valuationRequestId);

    }
}
