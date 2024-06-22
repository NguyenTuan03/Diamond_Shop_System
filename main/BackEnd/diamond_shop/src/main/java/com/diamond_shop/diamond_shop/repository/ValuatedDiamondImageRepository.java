package com.diamond_shop.diamond_shop.repository;


import com.diamond_shop.diamond_shop.entity.ValuatedDiamondImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ValuatedDiamondImageRepository extends JpaRepository<ValuatedDiamondImageEntity, String> {
//
//    @Query(value = "SELECT v.id FROM ValuatedDiamondImageEntity v WHERE v.valuatedDiamond.id=:diamondImageId")
//    List<String> getValuatedDiamondImageByDiamondImageId(@Param("diamondImageId") String diamondImageId);
}
