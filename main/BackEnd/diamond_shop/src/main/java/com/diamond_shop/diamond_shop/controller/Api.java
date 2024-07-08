package com.diamond_shop.diamond_shop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.ForgetPasswordDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.ResetPasswordRequestDTO;
import com.diamond_shop.diamond_shop.service.AccountService;

import jakarta.validation.Valid;


@RestController
@CrossOrigin
@RequestMapping("api/account")
public class Api {

    private final AccountService accountService;

    public Api(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping(path = "/welcome")
    public String welcome() {
        return "Hello";
    }

    @PostMapping(path = "/save")
    public String saveEmployee(@Valid @RequestBody AccountDTO accountDTO, Errors errors) {
        if (errors.hasErrors()) {
            return errors.getAllErrors().toString();
        }
        return accountService.addAccount(accountDTO);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginDTO loginDTO) {
        return accountService.loginAccount(loginDTO);
        
    }
    @PostMapping(path = "/forget-password")
    public ResponseEntity<?> CreateForgotPassword(@RequestBody ForgetPasswordDTO forgetPasswordDTO) {
        return accountService.forgotPassword(forgetPasswordDTO);
    }
    @PostMapping("/reset-password")
    public ResponseEntity<?> CreateResetPassword(@RequestBody ResetPasswordRequestDTO resetPasswordRequestDTO) {
        return accountService.resetPassword(resetPasswordRequestDTO);
    }
    @PostMapping(path = "/activate")
    public String activateAccount(@RequestParam("code") String code) {
        return accountService.activate(code);
    }
    @DeleteMapping(path = "/delete")
    public String deleteCustomer(@RequestParam("id") int id) {
        return accountService.deleteHardAccount(id);
    }   
}
