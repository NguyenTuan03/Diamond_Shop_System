package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/account")
public class Api {

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
    public String saveEmployee(@RequestBody AccountDTO accountDTO) {
        return accountService.addAccount(accountDTO);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
        LoginMessageDTO loginResponse = accountService.loginAccount(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    
    @PostMapping(path = "/update-status-request")
    public String postMethodName(@RequestBody UpdateRequestDTO updateRequestDTO) {
        if (updateRequestDTO.getType().equals("Receive")) {
            ProcessRequestEntity processRequest = processRequestService.updateRequest(updateRequestDTO);
            valuationResultService.assignForValuationStaff(processRequest);
            processResultService.processResult(processRequest);
            return "Update and assign to valuation staff successful!";
        } else if (updateRequestDTO.getType().equals("Reject")) {
            return processRequestService.cancelRequest(updateRequestDTO.getConsultingStaffId(), updateRequestDTO.getValuationRequestId());
        } else return null;
    }

    @PostMapping(path = "/valuate-diamond")
    public String postMethodName(@RequestBody String entity) {
        //Valuation staff

        return entity;
    }

}
