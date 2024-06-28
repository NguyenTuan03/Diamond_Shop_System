package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProcessRequestRepository extends JpaRepository<ProcessRequestEntity, Integer> {

    //    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.id=:id")
//    ProcessRequestEntity findById(@Param("id") int id);
//
    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ProcessRequestPojo(" +
            "p.id, " +
            "p.status," +
            "p.pendingRequestId.description, " +
            "p.pendingRequestId.id," +
            "p.staffId.id," +
            "p.staffId.fullname, " +
            "p.staffId.phone_number," +
            "p.pendingRequestId.customerId.id," +
            "p.pendingRequestId.customerId.fullname," +
            "p.pendingRequestId.customerId.email," +
            "p.pendingRequestId.customerId.phone_number) " +
            "FROM ProcessRequestEntity as p")
    Page<ProcessRequestEntity> findAllProcessResults(Pageable pageable);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ProcessRequestPojo(" +
            "p.id, " +
            "p.status," +
            "p.pendingRequestId.description, " +
            "p.pendingRequestId.id," +
            "p.staffId.id," +
            "p.staffId.fullname, " +
            "p.staffId.phone_number," +
            "p.pendingRequestId.customerId.id," +
            "p.pendingRequestId.customerId.fullname," +
            "p.pendingRequestId.customerId.email," +
            "p.pendingRequestId.customerId.phone_number) " +
            "FROM ProcessRequestEntity as p " +
            "WHERE p.staffId.id=:consultingStaffId")
    Page<ProcessRequestEntity> findProcessRequestsByConsultingStaffId(Pageable pageable, @Param("consultingStaffId") int consultingStaffId);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ProcessRequestPojo(" +
            "p.id, " +
            "p.status," +
            "p.pendingRequestId.description, " +
            "p.pendingRequestId.id," +
            "p.staffId.id," +
            "p.staffId.fullname, " +
            "p.staffId.phone_number, " +
            "p.pendingRequestId.customerId.id," +
            "p.pendingRequestId.customerId.fullname," +
            "p.pendingRequestId.customerId.email," +
            "p.pendingRequestId.customerId.phone_number) " +
            "FROM ProcessRequestEntity as p " +
            "WHERE p.pendingRequestId.customerId.id=:customerId")
    Page<ProcessRequestEntity> findProcessRequestsByCustomerId(Pageable pageable, @Param("customerId") int customerId);

    //    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id = :staffId AND p.pendingRequestId.id = :pendingRequestId")
//    Optional<ProcessRequestEntity> findByStaffIdAndValuationRequestId(Pageable pageable, @Param("staffId") int staffId, @Param("pendingRequestId") int pendingRequestId);
//
//    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id = :staffId AND p.staffId.role.id = :roleId")
//    ProcessRequestEntity findByStaffAndRole(@Param("staffId") int staffId, @Param("roleId") int roleId);
//
    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id=:staffId AND p.pendingRequestId.id=:pendingRequestId")
    ProcessRequestEntity findByStaffIdAndValuationRequestId(@Param("staffId") int staffId, @Param("pendingRequestId") int pendingRequestId);

    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.pendingRequestId.id=:pendingRequestId")
    ProcessRequestEntity findByPendingRequestId(@Param("pendingRequestId") int pendingRequestId);

    //
//    @Query(value = "SELECT s FROM ProcessRequestEntity s")
//    List<ProcessRequestEntity> getAll();
//
//    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.staffId=:staffId")
//    Optional<ProcessRequestEntity> findByStaffId(@Param("staffId") int staffId);
//
    @Query(value = "SELECT COUNT (p.staffId) FROM ProcessRequestEntity p WHERE p.staffId.id=:staffId")
    long countByStaffId(@Param("staffId") int staffId);
    @Query(value = "SELECT p " +
            "FROM ProcessRequestEntity p " +
            "WHERE p.pendingRequestId.valuationRequestEntity.id=:id")
    Optional<ProcessRequestEntity> findByValuationRequestId(@Param("id") int id);
}
