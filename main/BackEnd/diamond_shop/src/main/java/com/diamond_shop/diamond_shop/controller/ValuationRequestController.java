package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.service.ValuationRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("api/valuation-request")
@RequiredArgsConstructor
public class ValuationRequestController {
    private final ValuationRequestService valuationRequestService;

    @GetMapping(path = "/get")
    public Optional<ValuationRequestEntity> getValuationRequest(@RequestParam("id") int id) {
        return valuationRequestService.getValuationRequest(id);
    }

    @GetMapping(path = "/pending-request/get")
    public Optional<ValuationRequestEntity> getValuationRequestByPendingRequestId(@RequestParam("id") int pendingRequestId) {
        return valuationRequestService.getValuationRequestByPendingRequestId(pendingRequestId);
    }

    @GetMapping(path = "/process-request/check-finished", produces = MediaType.APPLICATION_JSON_VALUE)
    public String checkFinishDateByProcessRequestId(@RequestParam("id") int id) {
        return valuationRequestService.checkFinishDateByProcessRequestId(id);
    }

    @GetMapping(path = "/process-request/check-sealed", produces = MediaType.APPLICATION_JSON_VALUE)
    public String checkSealedDateByProcessRequestId(@RequestParam("id") int id) {
        return valuationRequestService.checkSealedDateByProcessRequestId(id);
    }
}