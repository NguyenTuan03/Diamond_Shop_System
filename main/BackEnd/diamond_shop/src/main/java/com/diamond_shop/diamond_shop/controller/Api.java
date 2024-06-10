package com.diamond_shop.diamond_shop.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;
import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;
import com.diamond_shop.diamond_shop.service.AccountService;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import com.diamond_shop.diamond_shop.service.ProcessResultService;
import com.diamond_shop.diamond_shop.service.ValuationRequestService;
import com.diamond_shop.diamond_shop.service.ValuationResultService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@CrossOrigin
@RequestMapping("api/account")
public class    Api {

    @Autowired
    private AccountService accountService;
    @Autowired
    private ValuationRequestService valuationRequestService;
    @Autowired
    private ProcessRequestService processRequestService;
    @Autowired
    private ProcessResultService processResultService;
    @Autowired
    private ValuationResultService valuationResultService;

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody AccountDTO accountDTO)
    {
        return accountService.addAccount(accountDTO);
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMessageDTO loginResponse = accountService.loginAccount(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    @PostMapping(path = "/valuation-request")
    public String createValuationRequest(@RequestBody ValuationRequestDTO valuationRequestDTO) {
        valuationRequestService.makeRequest(valuationRequestDTO);
        processRequestService.processRequest();
        return "Request Successfully!!";
    }
    @GetMapping(path = "/customer-request")
    public List<ValuationRequestDTO> viewCustomerRequest() {
        return valuationRequestService.viewRequest();
    }
    @PostMapping(path = "/update-status-request")
    public String postMethodName(@RequestBody UpdateRequestDTO updateRequestDTO) {
        int requestId = processRequestService.updateRequest(updateRequestDTO);
        valuationResultService.asignForValuationStaff(requestId);
        processResultService.processResult(requestId);
        return "Update and assign to valuation staff successful!";
    }
    @PostMapping(path = "/valuate-diamond")
    public String postMethodName(@RequestBody String entity) {
        //Valuation staff
        
        return entity;
    }
    
}
