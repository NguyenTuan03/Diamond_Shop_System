package com.diamond_shop.diamond_shop.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
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
@Table(name = "Users")
public class AccountEntity {
    @SequenceGenerator(
            name = "Users_sequence",
            sequenceName = "Users",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "Id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "Role_id")
    private RoleEntity role;

    @NotBlank(message = "Username is mandatory")
    @Column(name = "Username")
    private String username;

    @NotBlank(message = "Password is mandatory")
    @Column(name = "Password")
    private String password;

    @NotBlank(message = "Full name is mandatory")
    @Pattern(regexp = "(?!\\s)[a-zA-Z\\s]+$", message = "Invalid full name")
    @Column(name = "Fullname")
    private String fullname;

    @Email(message = "Invalid email", regexp = "([a-zA-Z0-9]+)([\\_\\.\\-{1}])?([a-zA-Z0-9]+)\\@([a-zA-Z0-9]+)([\\.])([a-zA-Z\\.]+)")
    @Column(name = "Email")
    private String email;

    @Pattern(regexp = "(84|0)(3|5|7|8|9)+([0-9]{8})\\b", message = "Invalid phone number")
    @Column(name = "Phone_number")
    private String phone_number;

    @Column(name = "Address")
    private String address;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<ValuationRequestEntity> valuationRequestEntity;

    @OneToMany(mappedBy = "staffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    public AccountEntity(RoleEntity role_id, String username, String fullname, String phone_number, String password) {
        this.role = role_id;
        this.username = username;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.password = password;
    }

    public AccountEntity(int id, String username, String fullname, String phone_number, String password) {
        this.id = id;
        this.username = username;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.password = password;
    }

    public AccountEntity(RoleEntity role, String username, String password, String fullname, String phonenumber, String encode) {
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
}
