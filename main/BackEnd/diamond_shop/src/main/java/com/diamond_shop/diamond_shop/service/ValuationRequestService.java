package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;


public interface ValuationRequestService {
    String makeRequest(int pendingId, int serviceId, int paymentId);
    Optional<ValuationRequestEntity> getValuationRequestByPendingRequestId(int pendingId);

    //    Page<ValuationRequestEntity> viewRequest(String search, int pageId, String filter);
//
    String checkFinishDateByProcessRequestId(int processRequestId);
//
//    List<ValuationRequestDTO> viewCustomerRequestId(int id);
}
