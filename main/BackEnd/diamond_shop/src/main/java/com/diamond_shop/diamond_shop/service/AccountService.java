package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;

import java.util.List;

public interface AccountService  {
    List<AccountEntity> getAllAccounts();
    String addAccount(AccountDTO accountDTO);
    void deleteAccount(int id);
    LoginMessageDTO loginAccount(LoginDTO loginDTO);
}
