package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.service.AccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AccountService accountService;

    @GetMapping(path = "/get")
    public Page<AccountEntity> getAllAccounts(@RequestParam("search") String search, @RequestParam("page") int page, @RequestParam("filter") String filter) {
        return accountService.getAllAccountsById(search, page, filter);
    }

    @PostMapping(path = "/create")
    public String createAccount(@Valid @RequestBody AccountDTO account) {
        return accountService.createAccount(account);
    }

    @PutMapping(path = "/update")
    public String updateAccount(@Valid @RequestBody AccountDTO account) {
        return accountService.updateAccount(account);
    }

    @DeleteMapping(path = "/delete")
    public void deleteAccount(@RequestParam("id") int id) {
        accountService.deleteAccount(id);
    }
}