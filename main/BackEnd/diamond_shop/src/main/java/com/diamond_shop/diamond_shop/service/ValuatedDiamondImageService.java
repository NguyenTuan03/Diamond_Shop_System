package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ValuatedDiamondImageEntity;

import java.util.List;

public interface ValuatedDiamondImageService {
    String createValuatedDiamondImage(String id, String valuatedDiamondId);
    List<String> getValuatedDiamondImagesByDiamondId(String diamondId);
}
