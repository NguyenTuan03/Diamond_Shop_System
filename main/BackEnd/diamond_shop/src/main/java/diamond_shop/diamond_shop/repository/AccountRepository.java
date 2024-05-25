package diamond_shop.diamond_shop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import diamond_shop.diamond_shop.entity.AccountEntity;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer>{
    // Optional<AccountEntity> findOneByEmailAndPassword(String email, String password);
    // AccountEntity findByEmail(String email);
}
