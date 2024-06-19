package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Process_requests")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ProcessRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private AccountEntity staffId;

    @ManyToOne
    @JoinColumn(name = "Valuation_request_id")
    private ValuationRequestEntity valuationRequestId;

    @Column(name = "Name")
    private String name;

    @OneToOne(mappedBy = "ProcessRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ProcessResultEntity processResult;

    public ProcessRequestEntity(AccountEntity staffId, ValuationRequestEntity valuationRequestId, String name) {
        this.staffId = staffId;
        this.valuationRequestId = valuationRequestId;
        this.name = name;
    }

}
