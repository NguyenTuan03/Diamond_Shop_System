package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "Users")
public class AccountEntity {
    @SequenceGenerator(
            name = "User_sequence",
            sequenceName = "User",
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

    public AccountEntity(RoleEntity role_Id, String user_Name, String full_Name, String phone, String password) {
        this.Role_id = role_Id;
        this.Username = user_Name;
        this.Fullname = full_Name;
        this.Phone_number = phone;
        this.Password = password;
    }
}
