package com.diamond_shop.diamond_shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.diamond_shop.diamond_shop.service.ValuatedDiamondImageService;

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
