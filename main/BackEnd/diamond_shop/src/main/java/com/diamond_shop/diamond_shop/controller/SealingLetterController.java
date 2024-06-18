package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.service.SealingLetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/sealing-letter")
public class SealingLetterController {
    @Autowired
    private SealingLetterService sealingLetterService;

    @GetMapping(path = "/check", produces = MediaType.APPLICATION_JSON_VALUE)
    public String checkSealingDate(@RequestParam("id") int id) {
        return sealingLetterService.checkSealingDate(id);
    }
}
