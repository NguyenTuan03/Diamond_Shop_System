package com.valuatediamond.diamond_shop.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.valuatediamond.diamond_shop.dto.RegistrationDTO;
import com.valuatediamond.diamond_shop.service.RegistrationService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping(path = "/registration")
@AllArgsConstructor
public class AccountAPI {

    private final RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody RegistrationDTO request) {
        return registrationService.register(request);
    }    
    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }

}
