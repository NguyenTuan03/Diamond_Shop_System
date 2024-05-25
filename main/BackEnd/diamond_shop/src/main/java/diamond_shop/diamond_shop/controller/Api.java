package diamond_shop.diamond_shop.controller;

import org.springframework.web.bind.annotation.RestController;

import diamond_shop.diamond_shop.dto.AccountDTO;
import diamond_shop.diamond_shop.dto.LoginDTO;
import diamond_shop.diamond_shop.dto.LoginMessageDTO;
import diamond_shop.diamond_shop.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@CrossOrigin
@RequestMapping("api/account")
public class Api {

    @Autowired
    private AccountService accountService;

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody AccountDTO accountDTO)
    {
        String name = accountService.addAccount(accountDTO);
        return name;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMessageDTO loginResponse = accountService.loginAccount(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    
}
