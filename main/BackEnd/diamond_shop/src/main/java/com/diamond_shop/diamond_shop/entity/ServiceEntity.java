package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "services")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotNull(message = "Service name is mandatory")
    @Column(name = "name")
    private String name;

    @NotNull(message = "Service price is mandatory")
    @Column(name = "price")
    private String price;

    @NotNull(message = "Service valuation time is mandatory")
    @Column(name = "time")
    private String time;

    @ManyToOne
    @JoinColumn(name = "statistic_id")
    private ServiceStatisticEntity statistic_id;

    @OneToOne
    @JoinColumn(name = "serviceId")
    private ValuationRequestEntity valuationRequestEntity;

    public ServiceEntity(int id) {
        this.id = id;
    }

    public ServiceEntity(int id, @NotNull(message = "Service name is mandatory") String name,
            @NotNull(message = "Service price is mandatory") String price,
            @NotNull(message = "Service valuation time is mandatory") String time,
            ServiceStatisticEntity statistic_id) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.time = time;
        this.statistic_id = statistic_id;
    }

    

}
