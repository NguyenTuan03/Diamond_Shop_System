package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.*;
import com.diamond_shop.diamond_shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@Service
public class ValuationRequestImpl implements ValuationRequestService {
    @Autowired
    private ValuationRequestRepository valuationRequestRepository;
    @Autowired
    private PendingRepository pendingRepository;
    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    ProcessRequestRepository processRequestRepository;

    @Autowired
    ProcessResultRepository processResultRepository;

    @Override
    public String makeRequest(int pendingId, int serviceId, int paymentId) {

        PendingRequestsEntity pending = pendingRepository.findById(pendingId).orElse(null);
        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        PaymentEntity payment = paymentRepository.findById(paymentId).orElse(null);

        if (pending == null)
            return "Pending not found";
        else if (service == null)
            return "Service not found";
        else if (payment == null)
            return "payment not found";

        Date createdDate = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(createdDate);
        calendar.add(Calendar.DAY_OF_MONTH, service.getTime());
        Date finishedDate = calendar.getTime();
        calendar.add(Calendar.DAY_OF_MONTH, 30);
        Date sealingDate = calendar.getTime();
        ValuationRequestEntity valuationRequestEntity = new ValuationRequestEntity(
                pending,
                service,
                payment,
                createdDate,
                finishedDate,
                sealingDate
        );
        valuationRequestRepository.save(valuationRequestEntity);
        return "Create successfully";
    }

    @Override
    public Optional<ValuationRequestEntity> getValuationRequestByPendingRequestId(int pendingId) {
        return valuationRequestRepository.findByPendingRequestId(pendingId);
    }

    @Override
    public String checkFinishDateByProcessRequestId(int processRequestId) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.findByProcessRequestId(processRequestId);
        if (valuationRequest.isEmpty())
            return "Valuation request not found";
        Date currentDate = new Date();
        if (currentDate.after(valuationRequest.get().getFinishDate())) {
            Optional<ProcessRequestEntity> processRequest = processRequestRepository.findById(processRequestId);
            if (processRequest.isEmpty())
                return "Process request not found";
            if (!processRequest.get().getStatus().equals("Finished") && !processRequest.get().getStatus().equals("Customer Received")) {
                processRequest.get().setStatus("Finished");
                processRequestRepository.save(processRequest.get());
                return "Finished request";
            } else return "Already finished request";
        } else return "Not finish";
    }
//
//    @Override
//    public List<ValuationRequestDTO> viewCustomerRequestId(int id) {
//        List<ValuationRequestEntity> valuationRequestEntities = valuationRequestRepository.findByCustomerId(id);
//        return valuationRequestEntities.stream()
//            .map(entity -> new ValuationRequestDTO(
//                entity.getCustomer().getUsername(),
//                entity.getServiceId().getId(),
//                entity.getCreatedDate(),
//                entity.getDescription()
//            ))
//            .collect(Collectors.toList());
//    }


}   