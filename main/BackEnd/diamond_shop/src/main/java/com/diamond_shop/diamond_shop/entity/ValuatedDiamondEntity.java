package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "valuated_diamonds")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuatedDiamondEntity {
    @Id
    @Column(name = "id")
    private String id;

    @OneToOne
    @JoinColumn(name = "valuation_result_id")
    private ValuationResultEntity valuationResult;

    @Column(name = "created_date")
    private Date createdDate;

    @OneToMany(mappedBy = "valuatedDiamond", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ValuatedDiamondImageEntity> valuatedDiamondImage;

    public ValuatedDiamondEntity(String id, ValuationResultEntity valuationResult, Date createdDate) {
        this.id = id;
        this.valuationResult = valuationResult;
        this.createdDate = createdDate;
    }
}
