package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.service.PaymentService;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import com.diamond_shop.diamond_shop.service.ValuationRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("api/valuation-request")
public class ValuationRequestController {
    @Autowired
    private ValuationRequestService valuationRequestService;

    @GetMapping(path = "/pending-request/get")
    public Optional<ValuationRequestEntity> getValuationRequestByPendingRequestId(@RequestParam("id") int pendingRequestId) {
        return valuationRequestService.getValuationRequestByPendingRequestId(pendingRequestId);
    }

    // @GetMapping(path = "/view")
    // public List<ValuationRequestDTO> viewRequest(@RequestParam("id") int id) {
    //     return valuationRequestService.viewCustomerRequestId(id);
    // }

    // @GetMapping(path = "/get")
    // public Page<ValuationRequestEntity> viewCustomerRequest(@RequestParam("search") String search, @RequestParam("page") int page, @RequestParam("filter") String filter) {
    //     return valuationRequestService.viewRequest(search, page, filter);
    // }

     @GetMapping(path = "/process-request/check-finished", produces = MediaType.APPLICATION_JSON_VALUE)
     public String checkFinishDateByProcessRequestId(@RequestParam("id") int id) {
         return valuationRequestService.checkFinishDateByProcessRequestId(id);
     }

    // @GetMapping(path = "/valuated-diamond")
    // public Optional<ValuatedDiamondEntity> getValuatedDiamond(@RequestParam("id") int id) {

    //     return valuatedDiamondService.getValuatedDiamondByValuationRequestId(id);
    // }
}