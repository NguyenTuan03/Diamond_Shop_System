package com.diamond_shop.diamond_shop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer>{

    @Query("SELECT a FROM AccountEntity a WHERE a.User_name = :userName")
    AccountEntity findByUserName(@Param("userName") String userName);

    @Query("SELECT a FROM AccountEntity a WHERE a.User_name = :userName AND a.Password = :password")
    Optional<AccountEntity> findOneByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);
}
