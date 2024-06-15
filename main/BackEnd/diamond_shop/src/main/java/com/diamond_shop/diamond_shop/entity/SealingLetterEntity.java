package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "Sealing_letters")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class SealingLetterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @NotBlank(message = "Created date is mandatory")
    @Column(name = "Created_date")
    private Date createdDate;

    @Column(name = "Content")
    private String content;

    @OneToOne
    @JoinColumn(name = "Valuation_result_id")
    private ValuationResultEntity valuationResult;

    @ManyToOne
    @JoinColumn(name = "Manager_id")
    private AccountEntity manager;
}
