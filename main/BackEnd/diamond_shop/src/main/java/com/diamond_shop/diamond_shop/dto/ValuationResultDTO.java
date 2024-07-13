package com.diamond_shop.diamond_shop.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ValuationResultDTO {
    private String origin;
    private String shape;
    private BigDecimal carat;
    private String color;
    private String cut;
    private String clarity;
    private String symmetry;
    private String polish;
    private String fluorescence;
    private String measurements;
    private BigDecimal diamondTable;
    private BigDecimal depth;
    private BigDecimal lengthToWidthRatio;
    @Min(1)
    @Max(100000)
    private BigDecimal price;
}
