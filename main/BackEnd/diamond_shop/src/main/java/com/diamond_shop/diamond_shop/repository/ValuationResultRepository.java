package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ValuationResultRepository extends JpaRepository<ValuationResultEntity, Integer> {

//    @Query("SELECT p FROM ValuationResultEntity p WHERE p.id=:id")
//    ValuationResultEntity findById(@Param("id") int id);
//
    @Query("SELECT v FROM ValuationResultEntity v WHERE v.id=:id")
    Optional<ValuationResultEntity> findById(@Param("id") String id);

    @Query("SELECT p FROM ValuationResultEntity p WHERE p.valuationRequestId.id = :valuationRequestId")
    ValuationResultEntity findByValuationRequestId(@Param("valuationRequestId") int valuationRequestId);

    @Query("SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ValuationResultPojo(" +
            "v.id," +
            "v.createdDate," +
            "v.origin," +
            "v.shape," +
            "v.carat," +
            "v.color," +
            "v.cut," +
            "v.clarity," +
            "v.symmetry," +
            "v.polish," +
            "v.fluorescence," +
            "v.measurements," +
            "v.diamondTable," +
            "v.depth," +
            "v.lengthToWidthRatio," +
            "v.price)" +
            "FROM ValuationResultEntity as v " +
            "WHERE v.id=:id")
   Optional<ValuationResultEntity> findValuationResultById(@Param("id") String id);

    //
//    @Modifying
//    @Query("DELETE FROM ValuationResultEntity v WHERE v.id IN :ids")
//    void deleteByIds(@Param("ids") List<Integer> ids);
}
