package com.diamond_shop.diamond_shop.service;

public interface SealingLetterService {
    String createSealingLetter(int valuationRequestId);
    String checkSealingDate(int valuationRequestId);
}
