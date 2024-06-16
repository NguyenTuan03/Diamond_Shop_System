package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.service.ValuationResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/valuation-result")
public class ValuationResultController {
    @Autowired
    private ValuationResultService valuationResultService;

    @PostMapping(path = "/valuate", produces = MediaType.APPLICATION_JSON_VALUE)
    public String postMethodName(@RequestBody ValuationResultDTO valuationResultDTO) {
        //Valuation staff
        return valuationResultService.valuateDiamond(valuationResultDTO);
    }
}