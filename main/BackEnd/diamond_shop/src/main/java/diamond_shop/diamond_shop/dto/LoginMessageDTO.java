package diamond_shop.diamond_shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginMessageDTO {
    private String message;
    private Boolean status;
    private AccountDTO account;
    public LoginMessageDTO(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }
    
}
