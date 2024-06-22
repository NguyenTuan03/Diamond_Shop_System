package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "valuation_results")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuationResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne
    @JoinColumn(name = "valuation_request_id")
    private ValuationRequestEntity valuationRequestId;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "origin")
    private String origin;

    @Column(name = "shape")
    private String shape;

    @Column(name = "carat")
    private BigDecimal carat;

    @Column(name = "color")
    private String color;

    @Column(name = "cut")
    private String cut;

    @Column(name = "clarity")
    private String clarity;
    
    @Column(name = "symmetry")
    private String symmetry;

    @Column(name = "polish")
    private String polish;

    @Column(name = "fluorescence")
    private String fluorescence;

    @Column(name = "measurements")
    private String measurements;

    @Column(name = "diamond_table")
    private BigDecimal diamondTable;

    @Column(name = "depth")
    private BigDecimal depth;

    @Column(name = "length_to_width_ratio")
    private BigDecimal lengthToWidthRatio;

    @OneToMany(mappedBy = "valuationResultId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessResultEntity> processResults = new HashSet<>();

    @OneToOne(mappedBy = "valuationResult", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuatedDiamondEntity valuatedDiamond;

    
}
