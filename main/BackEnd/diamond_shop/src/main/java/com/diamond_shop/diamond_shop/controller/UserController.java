package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.*;
import com.diamond_shop.diamond_shop.service.AccountService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/account")
@RequiredArgsConstructor
public class UserController {

    private final AccountService accountService;

    @GetMapping(path = "/welcome")
    public String welcome() {
        return "Hello";
    }

    //No need token
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

    @PostMapping(path = "/google")
    public ResponseEntity<?> loginGoogle(@RequestBody GoogleLoginRequestDTO googleLoginRequestDTO) {
        return accountService.loginGoogleAccount(googleLoginRequestDTO);
    }

    @PostMapping(path = "/forget-password")
    public ResponseEntity<?> CreateForgotPassword(@RequestBody ForgetPasswordDTO forgetPasswordDTO) {
        return accountService.forgotPassword(forgetPasswordDTO);
    }

    @PostMapping(path =  "/reset-password")
    public ResponseEntity<?> CreateResetPassword(@RequestBody ResetPasswordRequestDTO resetPasswordRequestDTO, HttpServletResponse response) {
        return accountService.resetPassword(resetPasswordRequestDTO, response);
    }

    @PostMapping("/reset-forget-password")
    public ResponseEntity<?> CreateResetForgetPassword(@RequestBody ResetPasswordRequestDTO resetPasswordRequestDTO) {
        return accountService.resetForgetPassword(resetPasswordRequestDTO);
    }

    @GetMapping(path = "/activate")
    public String activateAccount(@RequestParam("code") String code, HttpServletResponse response) {
        return accountService.activate(code, response);
    }
    @PutMapping(path = "/update")
    public String updateCustomer(@RequestParam("id") int id, @RequestBody UpdateAccountDTO updateAccountDTO)
    {
        return accountService.updateAccount(id,updateAccountDTO);
    }

    @DeleteMapping(path = "/delete")
    public String deleteCustomer(@RequestParam("id") int id) {
        return accountService.deleteHardAccount(id);
    }
}
