package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProcessRequestRepository extends JpaRepository<ProcessRequestEntity, Integer>, PagingAndSortingRepository<ProcessRequestEntity, Integer> {

//    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.id=:id")
//    ProcessRequestEntity findById(@Param("id") int id);
//
    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ProcessRequestPojo(" +
            "p.staffId.id,"+
            "p.staffId.fullname,"+
            "p.pendingRequestId.id,"+
            "p.status,"+
            "p.pendingRequestId.customerId.fullname,"+
            "p.pendingRequestId.customerId.email, "+
            "p.pendingRequestId.customerId.phone_number," +
            "p.pendingRequestId.createdDate, "+
            "p.pendingRequestId.description)"+
            "FROM ProcessRequestEntity as p " +
            "WHERE p.staffId.id=:consultingStaffId")
    Page<ProcessRequestEntity> findCustomerByConsultingStaffId(Pageable pageable, @Param("consultingStaffId") int consultingStaffId);

//    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id = :staffId AND p.pendingRequestId.id = :pendingRequestId")
//    Optional<ProcessRequestEntity> findByStaffIdAndValuationRequestId(Pageable pageable, @Param("staffId") int staffId, @Param("pendingRequestId") int pendingRequestId);
//
//    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id = :staffId AND p.staffId.role.id = :roleId")
//    ProcessRequestEntity findByStaffAndRole(@Param("staffId") int staffId, @Param("roleId") int roleId);
//
   @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id=:staffId AND p.pendingRequestId.id=:pendingRequestId")
   ProcessRequestEntity findByStaffIdAndValuationRequestId(@Param("staffId") int staffId, @Param("pendingRequestId") int pendingRequestId);
//
//    @Query(value = "SELECT s FROM ProcessRequestEntity s")
//    List<ProcessRequestEntity> getAll();
//
//    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.staffId=:staffId")
//    Optional<ProcessRequestEntity> findByStaffId(@Param("staffId") int staffId);
//
    @Query(value = "SELECT COUNT (p.staffId) FROM ProcessRequestEntity p WHERE p.staffId.id=:staffId")
    long countByStaffId(@Param("staffId") int staffId);
//
//    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.valuationRequestId.id=:id")
//    ProcessRequestEntity findByValuationRequestId(@Param("id") int id);
}
