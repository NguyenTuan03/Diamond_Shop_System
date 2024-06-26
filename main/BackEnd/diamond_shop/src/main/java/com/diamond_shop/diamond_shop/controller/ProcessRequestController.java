package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.ReceivePendingRequestDTO;
import com.diamond_shop.diamond_shop.dto.UpdateProcessRequestDTO;
import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/process-request")
public class ProcessRequestController {
    @Autowired
    private ProcessRequestService processRequestService;
    @Autowired
    private PendingRequestService pendingRequestService;
    @Autowired
    private ValuationResultService valuationResultService;
    @Autowired
    private ProcessResultService processResultService;

    @Autowired
    ValuationReceiptService valuationReceiptService;

    @GetMapping(path = "/get/consulting-staff")
    public Page<ProcessRequestEntity> viewProcessRequestsByStaff(@RequestParam("page") int page, @RequestParam("id") int consultingStaffId) {
        return processRequestService.viewProcessRequestsByConsultingStaffId(page, consultingStaffId);
    }

    @GetMapping(path = "/get/customer")
    public Page<ProcessRequestEntity> viewProcessRequestsByCustomer(@RequestParam("page") int page, @RequestParam("id") int customerId) {
        return processRequestService.viewProcessRequestsByCustomerId(page, customerId);
    }

    @PostMapping(path = "/create")
    public String createProcessRequest(@RequestBody ReceivePendingRequestDTO receivePendingRequestDTO) {
        return processRequestService.createProcessRequest(receivePendingRequestDTO);
    }

    @PutMapping(path = "/update")
    public String updateProcessRequest(@RequestParam("id") int id, @RequestBody UpdateProcessRequestDTO updateProcessRequestDTO) {
        return processRequestService.updateProcessRequest(id, updateProcessRequestDTO);
    }
}
