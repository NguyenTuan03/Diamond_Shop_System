package com.diamond_shop.diamond_shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AccountDTO {
<<<<<<< Updated upstream
    private String id;
=======
    private int id;
    private int roleid;
>>>>>>> Stashed changes
    private String username;
    private String fullname;
    private String email;
    private String phonenumber;
    private String password;
    private String address;
    
}
