package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SealingLetterRepository extends JpaRepository<SealingLetterEntity, Integer>, PagingAndSortingRepository<SealingLetterEntity, Integer> {
//
//    @Query(value = "SELECT s FROM SealingLetterEntity s")
//    Page<SealingLetterEntity> findAll(Pageable pageable);

    @Query(value = "SELECT s " +
            "FROM SealingLetterEntity s " +
            "WHERE s.valuationRequest.id=:id")
    Optional<SealingLetterEntity> findByValuationRequestId(@Param("id") int id);
}
