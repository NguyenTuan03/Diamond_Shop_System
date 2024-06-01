package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AccountService accountService;

    @GetMapping(path = "/get")
    public List<AccountEntity> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @PostMapping(path = "/delete")
    public void deleteAccount(@RequestBody AccountDTO account) {
        System.out.println(Integer.parseInt(account.getId()));
        accountService.deleteAccount(Integer.parseInt(account.getId()));
    }
}