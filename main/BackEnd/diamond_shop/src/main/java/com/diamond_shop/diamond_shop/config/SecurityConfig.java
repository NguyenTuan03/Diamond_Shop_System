package com.diamond_shop.diamond_shop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/account/save").permitAll()
                                .requestMatchers(HttpMethod.POST,"/api/account/login").permitAll()
//                                .requestMatchers(HttpMethod.POST, "/api/diamond/diamond-calculate").permitAll()
                                .anyRequest().permitAll() // Allow access without authentication to all requests
                )
                .logout(logout ->
                        logout
                                .permitAll() // Allow access to the logout page without authentication
                )
                .csrf(c -> c.disable()); // Disable CSRF protection
        http.cors(); // Enable CORS

        return http.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}