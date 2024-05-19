package com.valuatediamond.diamond_shop.repository;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.valuatediamond.diamond_shop.entity.TokenEntity;;

@Repository
// @Transactional(readOnly = true)
public interface ConfirmationTokenRepository extends JpaRepository<TokenEntity, Integer>{
    Optional<TokenEntity> findByToken(String token);

    @Modifying
    @Transactional
    @Query("UPDATE TokenEntity c SET c.confirmedAt = :confirmedAt WHERE c.token = :token")
    int updateConfirmedAtByToken(@Param("confirmedAt") LocalDateTime confirmedAt, @Param("token") String token);
}
