package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SealingLetterRepository extends JpaRepository<SealingLetterEntity, Integer> {
}
