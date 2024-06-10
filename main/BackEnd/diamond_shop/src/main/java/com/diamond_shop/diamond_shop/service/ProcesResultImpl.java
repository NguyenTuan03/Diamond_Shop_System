package com.diamond_shop.diamond_shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.ProcessRequestRepository;
import com.diamond_shop.diamond_shop.repository.ProcessResultRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;

import jakarta.transaction.Transactional;

@Service
public class ProcesResultImpl implements ProcessResultService{

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ValuationRequestRepository valuationRequestRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ProcessRequestRepository processRequestRepository;

    @Autowired
    private ProcessResultRepository processResultRepository;

    @Autowired
    private ValuationResultRepository valuationResultRepository;

    @Override    
    public String processResult(int requestId) {
        RoleEntity roleEntity = roleRepository.findById(4).orElse(null);
        if (roleEntity == null) {
            return "Role with id 4 not found";
        }
    
        List<ValuationRequestEntity> valuationRequestEntities = valuationRequestRepository.findAll();

        List<AccountEntity> accountEntities = accountRepository.findAllByRoleId(roleEntity);

        if (!accountEntities.isEmpty()) {
            int i = 0;
            List<ProcessRequestEntity> processRequestEntities = processRequestRepository.findAll();
            for (ProcessRequestEntity processRequestEntity : processRequestEntities) {
                if ("Done".equals(processRequestEntity.getName())) {
                AccountEntity valuationStaff = accountEntities.get(i % accountEntities.size());
                ValuationResultEntity valuationResultEntity = valuationResultRepository.findByValuationRequestId(requestId);
                
                Optional<ProcessResultEntity> existingResultOpt = processResultRepository.findByProcessRequestId(processRequestEntity.getId());
                ProcessResultEntity processResultEntity;
                if (existingResultOpt.isPresent()) {
                    processResultEntity = existingResultOpt.get();
                    processResultEntity.setValuationStaffId(valuationStaff);
                    processResultEntity.setValuationResultId(valuationResultEntity);
                    processResultEntity.setName("Not resolved yet");
                } else {
                    processResultEntity = new ProcessResultEntity (
                        valuationStaff,
                        valuationResultEntity,
                        processRequestEntity,
                        "Not resolved yet"
                    );
                }
                processRequestEntity.setProcessResult(processResultEntity);
                processRequestRepository.save(processRequestEntity); // save the process request which will also save the process result due to cascading
                i++;
            }
            }
            return "Task assigned successfully!";
        }
        return "No request available!";
    }
    @Override
    public void valuateDiamondProduct() {
        // TODO Auto-generated method stub
        
    }

    
    
}
 