package com.diamond_shop.diamond_shop.dto;

public class DiamondCheckRequestDTO {
    private String gradingLab;
    private String carat;
    private String shape;
    private String color;
    private String clarity;
    private String cut;
    public DiamondCheckRequestDTO(String gradingLab, String carat, String shape, String color, String clarity, String cut) {
        this.gradingLab = gradingLab;
        this.carat = carat;
        this.shape = shape;
        this.color = color;
        this.clarity = clarity;
        this.cut = cut;
    }

    public String getGrading_Lab() {
        return gradingLab;
    }

    public String getCarat() {
        return carat;
    }

    public String getShape() {
        return shape;
    }

    public String getColor() {
        return color;
    }

    public String getClarity() {
        return clarity;
    }

    public String getCut() {
        return cut;
    }
}
