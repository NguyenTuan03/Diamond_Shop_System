package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "Process_sealing_letters")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ProcessSealingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @NotNull(message = "Created date is mandatory")
    @Column(name = "Created_date")
    private Date createdDate;

    @ManyToOne
    @JoinColumn(name = "Sealing_letter_id")
    private SealingLetterEntity sealingLetter;

    @ManyToOne
    @JoinColumn(name = "Manager_id")
    private AccountEntity manager;

    @Column(name = "Status")
    private String status;

    public ProcessSealingEntity(String status, Date createdDate, AccountEntity manager, SealingLetterEntity sealingLetter) {
        this.status = status;
        this.createdDate = createdDate;
        this.manager = manager;
        this.sealingLetter = sealingLetter;
    }
}
