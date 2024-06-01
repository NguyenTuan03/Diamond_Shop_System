package com.diamond_shop.diamond_shop.entity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private int Id;

    @ManyToOne
    @JoinColumn(name = "Role_id")
    private RoleEntity Role_id;

    @Column(name = "Username")
    private String Username;

    @Column(name = "Password")
    private String Password;

    @Column(name = "Fullname")
    private String Fullname;

    @Column(name = "Email")
    private String Email;

    @Column(name = "Phone_number")
    private String Phone_number;

    @Column(name = "Address")
    private String Address;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<ValuationRequestEntity> valuationRequestEntity;

    @OneToMany(mappedBy = "staffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();
    
    public AccountEntity(RoleEntity role_id, String username, String fullname, String phone_number,String password) {
          this.Role_id = role_id;
        this.Username = username;
        this.Fullname = fullname;
        this.Phone_number = phone_number;
        this.Password = password;
    }

    public AccountEntity(int id, String username, String fullname, String phone_number, String password) {
        this.Id = id;
        this.Username = username;
        this.Fullname = fullname;
        this.Phone_number = phone_number;
        this.Password = password;
    }
}
