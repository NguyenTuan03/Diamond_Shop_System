package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ValuatedDiamondImageEntity;
import com.diamond_shop.diamond_shop.service.ValuatedDiamondImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/valuated-diamond-image")
public class ValuatedDiamondImageController {

    @Autowired
    ValuatedDiamondImageService valuatedDiamondImageService;

    @GetMapping(path = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
    public String createValuatedDiamondImage(@RequestParam("id") String id, @RequestParam("diamond") String diamondId) {
        return valuatedDiamondImageService.createValuatedDiamondImage(id, diamondId);
    }

    @GetMapping(path = "/get")
    public List<String> getValuatedDiamondImageByDiamondId(@RequestParam("diamondId") String diamondId) {
        return valuatedDiamondImageService.getValuatedDiamondImagesByDiamondId(diamondId);
    }
}
