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
    public Page<ProcessRequestEntity> viewProcessRequestsByStaff(@RequestParam("page") int page, @RequestParam("consultingStaffId") int consultingStaffId) {
        return processRequestService.viewProcessRequestsByConsultingStaffId(page, consultingStaffId);
    }

    @GetMapping(path = "/get/customer")
    public Page<ProcessRequestEntity> viewProcessRequestsByCustomer(@RequestParam("page") int page, @RequestParam("customerId") int customerId) {
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

    @PostMapping(path = "/process-request/update")
    public String updateStatus(@RequestBody UpdateRequestDTO updateRequestDTO) {
        if (updateRequestDTO.getProcessRequestStatus().equals("Not resolved yet")) {
            if (updateRequestDTO.getType().equalsIgnoreCase("receive")) {
                processRequestService.updateRequest("receive", updateRequestDTO);
                return "Receive request successfully";
            } else if (updateRequestDTO.getType().equalsIgnoreCase("reject")) {
                return processRequestService.cancelRequest(updateRequestDTO.getConsultingStaffId(), updateRequestDTO.getPendingRequestId());
            }
        }
        // else if (updateRequestDTO.getProcessRequestStatus().equals("Processing")) {
        //     if (updateRequestDTO.getType().equalsIgnoreCase("diamond")) {
        //         ProcessRequestEntity processRequest = processRequestService.updateRequest("diamond", updateRequestDTO);
        //         valuationResultService.assignForValuationStaff(processRequest);
        //         processResultService.processResult(processRequest);
        //         valuationReceiptService.createReceipt(updateRequestDTO.getValuationRequestId());
        //         return "Update and assign to valuation staff successful!";
        //     }
        // } else if (updateRequestDTO.getProcessRequestStatus().equals("Finished") || updateRequestDTO.getProcessRequestStatus().equals("Overdue")) {
        //     if (updateRequestDTO.getType().equalsIgnoreCase("customer_received")) {
        //         processRequestService.updateRequest("customer_received", updateRequestDTO);
        //         return "Customer has received their diamond and valuation result";
        //     }
        // } else return "Has already assigned to a valuation staff";
        return null;
    }
}
