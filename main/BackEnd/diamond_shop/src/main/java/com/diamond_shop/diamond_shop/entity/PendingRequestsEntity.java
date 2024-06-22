package com.diamond_shop.diamond_shop.entity;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "pending_requests")
public class PendingRequestsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @Column(name = "customer_id")
    private AccountEntity customerId;

    @Column(name = "description")
    private String description;

    @OneToOne(mappedBy = "pendingRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ProcessRequestEntity processRequestEntity;

    @OneToOne(mappedBy = "pendingRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationRequestEntity valuationRequestEntity;
}
