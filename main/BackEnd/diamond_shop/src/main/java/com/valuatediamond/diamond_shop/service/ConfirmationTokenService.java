package com.valuatediamond.diamond_shop.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.valuatediamond.diamond_shop.repository.ConfirmationTokenRepository;
import com.valuatediamond.diamond_shop.entity.TokenEntity;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class ConfirmationTokenService {
    private final ConfirmationTokenRepository confirmationTokenRepository;
    public void saveConfirmationToken(TokenEntity token) {
        confirmationTokenRepository.save(token);
    }
    public Optional<TokenEntity> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }
    @Transactional
    public int confirmToken(String token) {
        return confirmationTokenRepository.updateConfirmedAtByToken(LocalDateTime.now(), token);
    }
}
