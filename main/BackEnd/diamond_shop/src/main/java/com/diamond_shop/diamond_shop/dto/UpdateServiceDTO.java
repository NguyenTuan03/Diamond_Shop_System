package com.diamond_shop.diamond_shop.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UpdateServiceDTO {
    @NotNull
    int id;
    @NotNull
    String name;
    int price;
    @Min(10)
    @Max(60)
    int time;
    @NotNull
    int statisticId;
    @NotNull
    String statisticName;
}
