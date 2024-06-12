package com.diamond_shop.diamond_shop.service;

import java.util.List;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.dto.ViewRequestDTO;


public interface ValuationRequestService {
    String makeRequest(ValuationRequestDTO valuationRequestDTO);
    String viewRequest(ViewRequestDTO viewRequestDTO);
}
