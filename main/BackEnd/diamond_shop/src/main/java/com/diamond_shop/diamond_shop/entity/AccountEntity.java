package com.diamond_shop.diamond_shop.entity;

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

@Entity
@Getter
@NoArgsConstructor
@Table(name="[User]")
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
    @Column(name = "User_Id")
    private int User_id;

    @ManyToOne
    @JoinColumn(name = "Role_id")
    private RoleEntity Role_id;

    @Column(name = "User_name")
    private String User_name;

    @Column(name = "Password")
    private String Password;

    @Column(name = "Full_name")
    private String Full_name;

    @Column(name = "Email")
    private String Email;

    @Column(name = "Phone")
    private String Phone;

    @Column(name = "Address")
    private String Address;

    public AccountEntity(RoleEntity role_Id, String user_Name, String full_Name, String phone, String password) {
        this.Role_id = role_Id;
        this.User_name = user_Name;
        this.Full_name = full_Name;
        this.Phone = phone;
        this.Password = password;
    }
}
