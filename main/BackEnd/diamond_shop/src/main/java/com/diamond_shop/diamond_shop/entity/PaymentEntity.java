package com.diamond_shop.diamond_shop.entity;

import java.util.Date;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Payments")
@Getter
@Setter
@NoArgsConstructor
public class PaymentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "Customer_id")
    private AccountEntity customerId;

    @ManyToOne
    @JoinColumn(name = "Valuation_request_id")
    private ValuationRequestEntity valuationRequestId;

    @Column(name = "Created_date")
    private Date createdDate;
    
    @Column(name = "Type")
    private String type;

    public PaymentEntity(AccountEntity customerId, ValuationRequestEntity valuationRequestId, Date createdDate,
            String type) {
        this.customerId = customerId;
        this.valuationRequestId = valuationRequestId;
        this.createdDate = createdDate;
        this.type = type;
    }

    
}
