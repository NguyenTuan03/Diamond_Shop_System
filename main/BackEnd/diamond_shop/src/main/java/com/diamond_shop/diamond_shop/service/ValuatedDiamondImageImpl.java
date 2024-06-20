package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ValuatedDiamondEntity;
import com.diamond_shop.diamond_shop.entity.ValuatedDiamondImageEntity;
import com.diamond_shop.diamond_shop.repository.ValuatedDiamondImageRepository;
import com.diamond_shop.diamond_shop.repository.ValuatedDiamondRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValuatedDiamondImageImpl implements ValuatedDiamondImageService {
    @Autowired
    private ValuatedDiamondImageRepository valuatedDiamondImageRepository;
    @Autowired
    private ValuatedDiamondRepository valuatedDiamondRepository;

    @Override
    public String createValuatedDiamondImage(String id, String valuatedDiamondId) {
        ValuatedDiamondEntity valuatedDiamond = valuatedDiamondRepository.getById(valuatedDiamondId);
        if (valuatedDiamond == null)
            return "Not found valuated diamond with id: " + valuatedDiamondId;
        ValuatedDiamondImageEntity valuatedDiamondImage = new ValuatedDiamondImageEntity(id, valuatedDiamond);
        valuatedDiamondImageRepository.save(valuatedDiamondImage);
        return "Successfully created valuated diamond image: " + valuatedDiamondId;
    }

    @Override
    public List<String> getValuatedDiamondImagesByDiamondId(String diamondId) {
        return valuatedDiamondImageRepository.getValuatedDiamondImageByDiamondImageId(diamondId);
    }
}
