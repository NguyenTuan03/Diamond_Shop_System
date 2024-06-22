package com.diamond_shop.diamond_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
@Repository
public interface PendingRepository extends JpaRepository<PendingRequestsEntity,Integer>{

}
