package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class ValuationReceiptPojo {
    private int id;
    private Date createdDate;
    private int customerId;
    private String customerName;
    private String customerPhoneNumber;
    private String serviceName;
    private String price;
    private Date valuationFinishDate;
    private Date valuationSealingDate;
}
