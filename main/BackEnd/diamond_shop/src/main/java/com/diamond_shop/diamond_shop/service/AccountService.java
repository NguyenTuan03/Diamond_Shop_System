package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;

public interface AccountService {
    String addAccount(AccountDTO accountDTO);
    LoginMessageDTO loginAccount(LoginDTO loginDTO);
}
