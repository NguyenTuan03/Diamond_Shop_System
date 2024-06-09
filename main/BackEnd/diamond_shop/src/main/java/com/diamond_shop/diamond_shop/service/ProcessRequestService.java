package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;

public interface ProcessRequestService {
    String processRequest();
    int updateRequest(UpdateRequestDTO updateRequestDTO);
}   
