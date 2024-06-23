package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface ProcessResultRepository extends JpaRepository<ProcessResultEntity, Integer>,PagingAndSortingRepository<ProcessResultEntity, Integer> {
//    // @Query("SELECT p FROM ProcessResultEntity p WHERE p.valuationStaffId.id = :staffId AND p.ProcessRequestId.id = :processRequestId")
//    // Optional<ProcessResultEntity> findByStaffIdAndProcessRequestId(@Param("staffId") int staffId, @Param("processRequestId") int processRequestId);
//
//    @Query("SELECT p FROM ProcessResultEntity p WHERE p.ProcessRequestId.id = :processRequestId")
//    ProcessResultEntity findByProcessRequestId(@Param("processRequestId") int processRequestId);
//
    @Query(value = "SELECT COUNT (p.valuationStaffId) " +
            "FROM ProcessResultEntity p " +
            "WHERE p.valuationStaffId.id=:staffId")
    long countByStaffId(@Param("staffId") int staffId);
//
//    @Query(value = "SELECT " +
//            "NEW com.diamond_shop.diamond_shop.pojo.ProcessResultPojo(p.)" +
//            "FROM ProcessResultEntity as p " +
//            "WHERE p.valuationStaffId.id=:staffId")
//    Page<ProcessResultEntity> findByStaffId(Pageable pageable, @Param("staffId") int staffId);
//
//    @Query("SELECT p FROM ProcessResultEntity p WHERE p.valuationResultId.id=:id")
//    ProcessResultEntity findByValuationResultId(@Param("id") int id);
}
