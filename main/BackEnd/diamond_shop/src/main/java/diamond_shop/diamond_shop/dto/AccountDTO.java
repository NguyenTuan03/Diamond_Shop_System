package diamond_shop.diamond_shop.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountDTO {
    private String accountid;
    private String accountname;
    private String email;
    private String password;
    public AccountDTO() {
    }
    public AccountDTO(String accountid, String accountname, String email, String password) {
        this.accountid = accountid;
        this.accountname = accountname;
        this.email = email;
        this.password = password;
    }
    
}
