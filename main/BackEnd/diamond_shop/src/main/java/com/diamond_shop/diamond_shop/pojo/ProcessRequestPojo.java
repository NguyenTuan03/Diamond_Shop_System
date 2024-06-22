package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class ProcessRequestPojo {
    private int consultingStaffId;
    private String consultingStaffName;
    private int pendingRequestId;
    private String status;
    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private Date createdDate;
    private String description;
}
