package com.valuatediamond.diamond_shop.service;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.valuatediamond.diamond_shop.entity.AccountEntity;
import com.valuatediamond.diamond_shop.repository.AccountRepository;
import com.valuatediamond.diamond_shop.entity.TokenEntity;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AccountService implements UserDetailsService{
    private final static String USER_NOT_FOUND = "User with email %s not found";
    private final AccountRepository accountRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return accountRepository.findByEmail(email).orElseThrow(() -> 
            new UsernameNotFoundException(String.format(USER_NOT_FOUND, email)));
    }

    public String signUpUser(AccountEntity a) {
        boolean userExists = accountRepository.findByEmail(a.getEmail()).isPresent();
        if (userExists) {
            throw new IllegalStateException("Email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(a.getPassword());
        a.setPassword(encodedPassword);

        accountRepository.save(a);

        String token = UUID.randomUUID().toString();
        TokenEntity confirmationToken = new TokenEntity(
            token,
            LocalDateTime.now(),
            LocalDateTime.now().plusMinutes(15),
            a
        );
        confirmationTokenService.saveConfirmationToken(confirmationToken);
        return token;

    }
    
    @Transactional
    public int enableAccountByEmail(String email) {
        return accountRepository.updateEnabledByEmail(email);
    }
    
}
