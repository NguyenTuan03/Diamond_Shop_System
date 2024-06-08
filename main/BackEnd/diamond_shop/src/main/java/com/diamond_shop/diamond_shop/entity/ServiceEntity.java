package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@NoArgsConstructor
@Table(name = "Services")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int Id;

    @NotBlank(message = "Service name is mandatory")
    @Column(name = "Name")
    private String Name;

    @NotBlank(message = "Service price is mandatory")
    @Column(name = "Price")
    private String Price;

    @NotBlank(message = "Service valuation time is mandatory")
    @Column(name = "Time")
    private String Time;

    @OneToOne
    @JoinColumn(name = "Service_statistic_id")
    private ServiceStatisticEntity Service_statistic_id;

    public ServiceEntity(int id, String name, String price, String time, ServiceStatisticEntity statistic_id) {
        Id = id;
        Name = name;
        Price = price;
        Time = time;
        Service_statistic_id = statistic_id;
    }
}
