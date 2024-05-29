package diamond_shop.diamond_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import diamond_shop.diamond_shop.entity.ServiceEntity;
@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity, Integer>{

}
