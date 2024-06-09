package com.diamond_shop.diamond_shop.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;

@Repository
public interface ValuationRequestRepository extends JpaRepository<ValuationRequestEntity, Integer>{
    @Query("SELECT new com.diamond_shop.diamond_shop.dto.ValuationRequestDTO(vr.customer.username, vr.serviceId.Id, vr.createdDate, vr.description) FROM ValuationRequestEntity vr")
    List<ValuationRequestDTO> findAllList();
    
    ValuationRequestEntity findById(int id);

    @Query(value = "SELECT s FROM ValuationRequestEntity s")
    List<ValuationRequestEntity> getAll();
}
