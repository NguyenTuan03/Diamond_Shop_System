package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

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

    @Modifying
    @Transactional
    @Query("UPDATE AccountEntity a SET a.Role_id.Id=:Role_id, a.Fullname=:fullName, a.Email=:email, a.Phone_number=:phoneNumber, a.Address=:address WHERE a.Id=:id")
    void updateAccountInfoById(@Param("id") int id, @Param("Role_id") int Role_id, @Param("fullName") String fullName, @Param("email") String email, @Param("phoneNumber") String phoneNumber, @Param("address") String address);

    void deleteById(int id);

    @Query("SELECT a FROM AccountEntity a WHERE a.Role_id = :Role_id")
    List<AccountEntity> findAllByRoleId(@Param("Role_id") RoleEntity Role_id);
}
