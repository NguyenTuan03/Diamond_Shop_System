package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {

    @Query(value = "SELECT a FROM AccountEntity a")
    List<AccountEntity> getAllAccounts();

    @Query("SELECT a FROM AccountEntity a WHERE a.Username = :userName")
    AccountEntity findByUserName(@Param("userName") String userName);

    @Query("SELECT a FROM AccountEntity a WHERE a.Username = :userName AND a.Password = :password")
    Optional<AccountEntity> findOneByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);

    @Query("SELECT a FROM AccountEntity  a WHERE a.Id=:id")
    AccountEntity findByUserId(@Param("id") int id);

    void deleteById(int id);

    @Query("SELECT a FROM AccountEntity a WHERE a.Role_id = :Role_id")
    List<AccountEntity> findAllByRoleId(@Param("Role_id") RoleEntity Role_id);
}
