package com.valuatediamond.diamond_shop.repository;

public interface EmailSender {
    void send(String to, String email);
}
