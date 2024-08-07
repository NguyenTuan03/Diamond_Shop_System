package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.*;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.pojo.DetailDiamondPojo;
import com.diamond_shop.diamond_shop.pojo.DiamondPojo;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface ValuationResultService {

    int totalValuationResults();

    int totalNotDoneValuationResults();

    Page<ValuationResultEntity> getAllValuationResults(int page);

    Page<ValuationResultEntity> getAllValuatedValuationResults(int page);

    Optional<ValuationResultEntity> getValuationResultById(String id);

    Page<ValuationResultEntity> getValuationResultsByCustomerId(int page, int customerId);

    Optional<ValuationResultEntity> getValuationResultByValuationRequestId(int valuationRequestId);

    String valuateDiamond(String id, ValuationResultDTO valuationResultDTO);

    String valuateCutGrade(String id, CutGradeDTO cutGradeDto);

    String valuateClarityGrade(String id, ClarityGradeDTO clarityGradeDto);

    BigDecimal valuatePrice(String id, GeneratePriceDTO generatePriceDTO);

    String createValuationResult(ProcessRequestEntity processRequest);

    List<String> getValuationResultImage(String id);

    String createValuationResultImage(CreateImageDTO createImageDTO);

    String deleteValuationResultImage(String imageId);

    List<DiamondPojo> crawlNaturalDiamond(String shape);

    List<DiamondPojo> crawlLabGrownDiamond(String shape);

    List<DetailDiamondPojo> crawlDetailDiamond(String carat);
}
