package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.PaymentEntity;
import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
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
//
//    @Override
//    public Page<ValuationRequestEntity> viewRequest(String search, int pageId, String filter) {
//        int pageSize = 5;
//        int pageNumber = --pageId;
//        if (search.isEmpty() && filter.isEmpty())
//            return valuationRequestRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by("id")));
//        else if (!search.isEmpty() && filter.isEmpty())
//            return valuationRequestRepository.searchNonFilter(PageRequest.of(pageNumber, pageSize, Sort.by("id")), search);
//        else {
//            switch (filter) {
//                case "customerName":
//                    return valuationRequestRepository.searchCustomerName(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
//                case "serviceName":
//                    return valuationRequestRepository.searchServiceName(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
//                case "description":
//                    return valuationRequestRepository.searchDescription(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
//            }
//        }
//        return null;
//    }
//
//    @Override
//    public String checkFinishDate(int valuationRequestId) {
//        ValuationRequestEntity valuationRequest = valuationRequestRepository.findById(valuationRequestId);
//        if (valuationRequest == null)
//            return "Not found valuation request";
//        Date currentDate = new Date();
//        if (currentDate.after(valuationRequest.getFinishDate())) {
//            ProcessRequestEntity processRequest = processRequestRepository.findByValuationRequestId(valuationRequestId);
//            if (!processRequest.getName().equals("Finished") && !processRequest.getName().equals("Customer Received")) {
//                processRequest.setName("Finished");
//                processRequestRepository.save(processRequest);
//                return "Finish request";
//            } else return "Already finished request";
//        } else return "Not finish";
//    }
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