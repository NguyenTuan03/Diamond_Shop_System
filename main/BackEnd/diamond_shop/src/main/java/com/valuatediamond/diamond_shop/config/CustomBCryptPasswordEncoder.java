package com.valuatediamond.diamond_shop.config;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomBCryptPasswordEncoder implements PasswordEncoder  {
    @Override
    public String encode(CharSequence rawPassword) {
        return BCrypt.hashpw(rawPassword.toString(), BCrypt.gensalt());
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        if (encodedPassword != null && (encodedPassword.startsWith("$2y$") || encodedPassword.startsWith("$2b$"))) {
            encodedPassword = "$2a" + encodedPassword.substring(4);
        }
        return BCrypt.checkpw(rawPassword.toString(), encodedPassword);
    }
}
