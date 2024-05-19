package com.valuatediamond.diamond_shop.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "Confirmation_token")
public class TokenEntity {
    @SequenceGenerator(
        name = "Confirmation_token",
        sequenceName = "Confirmation_token",
        allocationSize = 1
    )
    @Id
    @GeneratedValue(
        strategy = GenerationType.IDENTITY
    )
    private int id;

    @Column(nullable = false)
    private String token;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime expiredAt;

    private LocalDateTime confirmedAt;
    @ManyToOne
    @JoinColumn (
        nullable = false,
        name = "accountId"
    )
    private AccountEntity accountEntity;

    public TokenEntity(String token, LocalDateTime createdAt, LocalDateTime expiredAt,
             AccountEntity accountEntity) {
        this.token = token;
        this.createdAt = createdAt;
        this.expiredAt = expiredAt;
        this.accountEntity = accountEntity;
    }
    
}
