package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;

public interface ValuationResultService {
    String asignForValuationStaff(int requestId);
    
    void valuateDiamond(ValuationResultDTO valuationResultDTO);
}
