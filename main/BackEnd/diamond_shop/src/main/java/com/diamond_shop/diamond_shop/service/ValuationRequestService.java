package com.diamond_shop.diamond_shop.service;

import java.util.List;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;


public interface ValuationRequestService {
    String makeRequest(ValuationRequestDTO valuationRequestDTO);
    List<ValuationRequestDTO> viewRequest();
}
