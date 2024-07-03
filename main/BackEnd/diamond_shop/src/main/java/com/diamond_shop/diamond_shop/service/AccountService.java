package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import org.springframework.data.domain.Page;

public interface AccountService {

    Page<AccountEntity> getAllAccountsById(String search, int pageId, String filter);

    Page<AccountEntity> getAllDeletedAccountsById(String search, int pageId, String filter);

    String addAccount(AccountDTO accountDTO);

    String createAccount(AccountDTO accountDTO);

    String deleteHardAccount(int id);

    String deleteSoftAccount(int id);
    
    String updateAccount(AccountDTO accountDTO);

    String restoreAccount(int id);

    LoginMessageDTO loginAccount(LoginDTO loginDTO);

    String updatePhoneNumber(String phoneNumber);

    String checkDuplicateAccount(String type, int id, String username, String email, String phoneNumber);

}
