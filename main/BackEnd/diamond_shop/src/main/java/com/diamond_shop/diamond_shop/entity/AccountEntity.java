package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AccountEntity {
    @SequenceGenerator(
            name = "users_sequence",
            sequenceName = "users",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private RoleEntity role;

    @Pattern(regexp = "(?!\\s)[a-zA-Z0-9]+$", message = "Invalid username")
    @Column(name = "username")
    private String username;

    @Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\\w\\s]).{8,}$", message = "Invalid password")
    @Column(name = "password")
    private String password;

    @Pattern(regexp = "(?!\\s)[a-zA-Z\\s]+$", message = "Invalid full name")
    @Column(name = "full_name")
    private String fullname;

    @Email(message = "Invalid email", regexp = "([a-zA-Z0-9]+)([\\_\\.\\-{1}])?([a-zA-Z0-9]+)\\@([a-zA-Z0-9]+)([\\.])([a-zA-Z\\.]+)")
    @Column(name = "email")
    private String email;

    @Pattern(regexp = "^0?([3|5|7|8|9]+([0-9]{8})\\b)", message = "Invalid phone number")
    @Column(name = "phone_number")
    private String phone_number;

    @Column(name = "address")
    private String address;
    
    @OneToMany(mappedBy = "managerId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<SealingLetterEntity> sealingLetterEntities = new HashSet<>();

    @OneToMany(mappedBy = "managerId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<CommitmentLetterEntity> commitmentLetterEntities = new HashSet<>();

    @OneToMany(mappedBy = "staffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    @OneToMany(mappedBy = "customerId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<PendingRequestsEntity> pendingRequestsEntities = new HashSet<>();

    @OneToMany(mappedBy = "valuationStaffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessResultEntity> processResultEntity = new HashSet<>();

    @OneToOne(mappedBy = "customerId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private PaymentEntity paymentEntity;

    public AccountEntity(RoleEntity role_id, String username, String password, String fullname, String phone_number, String email) {
        this.role = role_id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.email = email;
    }

    public AccountEntity(int id, String username, String fullname, String phone_number, String password) {
        this.id = id;
        this.username = username;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.password = password;
    }

    public AccountEntity(RoleEntity role, String username, String password, String fullname, String email, String phonenumber, String address) {
        this.role = role;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phonenumber;
        this.address = address;
    }

    public AccountEntity(String username, String password) {

        this.username = username;
        this.password = password;
    }
}
