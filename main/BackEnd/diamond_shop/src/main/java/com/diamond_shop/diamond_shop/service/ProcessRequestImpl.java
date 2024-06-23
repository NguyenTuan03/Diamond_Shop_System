package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ReceivePendingRequestDTO;
import com.diamond_shop.diamond_shop.dto.UpdateProcessRequestDTO;
import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProcessRequestImpl implements ProcessRequestService {
    @Autowired
    private ProcessRequestRepository processRequestRepository;

    @Autowired
    private PendingRepository pendingRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ProcessResultRepository processResultRepository;


    @Override
    public Page<ProcessRequestEntity> viewProcessRequestsByConsultingStaffId(int page, int consultingStaff) {
        int pageSize = 5;
        int pageNumber = --page;
        return processRequestRepository.findProcessRequestsByConsultingStaffId(PageRequest.of(pageNumber, pageSize), consultingStaff);
    }

    @Override
    public Page<ProcessRequestEntity> viewProcessRequestsByCustomerId(int page, int customerId) {
        int pageSize = 5;
        int pageNumber = --page;
        return processRequestRepository.findProcessRequestsByCustomerId(PageRequest.of(pageNumber, pageSize), customerId);
    }

    @Override
    public String createProcessRequest(ReceivePendingRequestDTO receivePendingRequestDTO) {
        AccountEntity consultingStaff = accountRepository.findById(receivePendingRequestDTO.getConsultingStaffId()).orElse(null);
        if (consultingStaff == null)
            return "Cannot found this consulting staff with id: " + receivePendingRequestDTO.getConsultingStaffId();
        PendingRequestsEntity pendingRequest = pendingRepository.findById(receivePendingRequestDTO.getPendingRequestId()).orElse(null);
        if (pendingRequest == null)
            return "Cannot found pending request with id: " + receivePendingRequestDTO.getPendingRequestId();

        ProcessRequestEntity processRequest = processRequestRepository.findByPendingRequestId(pendingRequest.getId());
        if (processRequest == null) {
            processRequest = new ProcessRequestEntity(
                    consultingStaff,
                    pendingRequest,
                    "Not resolved yet");
            processRequestRepository.save(processRequest);
            return "Task assigned successfully!";
        } else return "Have already received !";
    }

    @Override
    public String updateProcessRequest(int id, UpdateProcessRequestDTO updateProcessRequestDTO) {
        ProcessRequestEntity processRequest = processRequestRepository.findById(id).orElse(null);
        if (processRequest == null)
            return "Cannot found this process request with id: " + id;
        processRequest.setStatus(updateProcessRequestDTO.getStatus());
        processRequestRepository.save(processRequest);
        return "Update process request successfully!";
    }

    @Override
    public String cancelRequest(int consultingStaffId, int pendingRequestId) {
        RoleEntity role = roleRepository.findById(3).orElse(null);
        if (role == null)
            return "Role with id 3 not found";

        List<AccountEntity> accounts = accountRepository.findExceptById(role.getId(), consultingStaffId);
        if (accounts.isEmpty()) return "Cannot reject";

        AccountEntity leastOccupiedConsultingStaff = getLeastOccupiedConsultingStaff(accounts);
        PendingRequestsEntity pendingRequestsEntity = pendingRepository.findById(pendingRequestId).orElse(null);
        ProcessRequestEntity oldProcessRequest = processRequestRepository.findByStaffIdAndValuationRequestId(consultingStaffId, pendingRequestId);
        processRequestRepository.delete(oldProcessRequest);
        ProcessRequestEntity newProcessRequest = new ProcessRequestEntity(leastOccupiedConsultingStaff, pendingRequestsEntity, "Not resolved yet");
        processRequestRepository.save(newProcessRequest);
        return "Cancel assigned successfully!";
    }

    public AccountEntity getLeastOccupiedConsultingStaff(List<AccountEntity> consultingStaff) {
        if (consultingStaff.isEmpty()) return null;

        long minOccupiedStaff = processRequestRepository.countByStaffId(consultingStaff.get(0).getId());
        int choosenStaffId = 0;
        int i = 0;
        for (AccountEntity staff : consultingStaff) {
            long countStaffOccupied = processRequestRepository.countByStaffId(staff.getId());
            if (minOccupiedStaff > countStaffOccupied) {
                minOccupiedStaff = countStaffOccupied;
                choosenStaffId = i;
            }
            i++;
        }
        return consultingStaff.get(choosenStaffId);
    }

    @Override
    public ProcessRequestEntity updateRequest(String type, UpdateRequestDTO updateRequestDTO) {
        ProcessRequestEntity process = processRequestRepository.findByStaffIdAndValuationRequestId(updateRequestDTO.getConsultingStaffId(), updateRequestDTO.getPendingRequestId());
        if (Objects.equals(type, "receive"))
            process.setStatus("Processing");
        else if (Objects.equals(type, "diamond"))
            process.setStatus("Diamond Received");
        else if (Objects.equals(type, "customer_received"))
            process.setStatus("Customer Received");
        processRequestRepository.save(process);
        return process;
    }
}
