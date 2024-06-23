package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.ValuatedDiamondEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.service.PaymentService;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import com.diamond_shop.diamond_shop.service.ValuatedDiamondService;
import com.diamond_shop.diamond_shop.service.ValuationRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("api/valuation-request")
public class ValuationRequestController {
    @Autowired
    private ValuationRequestService valuationRequestService;
    @Autowired
    private ProcessRequestService processRequestService;
    @Autowired
    private ValuatedDiamondService valuatedDiamondService;
    @Autowired
    private PaymentService paymentService;

    // @GetMapping(path = "/view")
    // public List<ValuationRequestDTO> viewRequest(@RequestParam("id") int id) {
    //     return valuationRequestService.viewCustomerRequestId(id);
    // }

        @GetMapping(path = "/create")
        public String createValuationRequest(
            @RequestParam("id") int id,
            @RequestParam("serviceId") int serviceId,
            @RequestParam("pendingId") int pendingId) {
            int paymentId = paymentService.createPayment(id);
            valuationRequestService.makeRequest(pendingId,serviceId,paymentId);
            // int valuationRequestId = valuationRequestService.makeRequest(valuationRequestDTO);

            // paymentService.createPayment(valuationRequestDTO.getUsername(), valuationRequestId);

            // String makeProcessRequest = processRequestService.processRequest(valuationRequestId);
            return "ok";
        }

    // @GetMapping(path = "/get")
    // public Page<ValuationRequestEntity> viewCustomerRequest(@RequestParam("search") String search, @RequestParam("page") int page, @RequestParam("filter") String filter) {
    //     return valuationRequestService.viewRequest(search, page, filter);
    // }

    // @GetMapping(path = "/check-finished", produces = MediaType.APPLICATION_JSON_VALUE)
    // public String checkFinishDate(@RequestParam("id") int id) {
    //     return valuationRequestService.checkFinishDate(id);
    // }

    // @GetMapping(path = "/valuated-diamond")
    // public Optional<ValuatedDiamondEntity> getValuatedDiamond(@RequestParam("id") int id) {

    //     return valuatedDiamondService.getValuatedDiamondByValuationRequestId(id);
    // }
}