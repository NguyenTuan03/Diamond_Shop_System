package com.valuatediamond.diamond_shop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.valuatediamond.diamond_shop.entity.AccountEntity;

@Repository
// @Transactional(readOnly = true)
public interface AccountRepository extends JpaRepository<AccountEntity, Integer>{  

    Optional<AccountEntity> findByEmail(String email);

    @Modifying
    @Transactional
    @Query("UPDATE AccountEntity a SET a.enabled = TRUE, a.locked = FALSE WHERE a.email = :email")
    int updateEnabledByEmail(@Param("email") String email);
    
}
