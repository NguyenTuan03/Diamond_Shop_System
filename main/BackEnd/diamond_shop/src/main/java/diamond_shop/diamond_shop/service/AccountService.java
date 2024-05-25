package diamond_shop.diamond_shop.service;


import diamond_shop.diamond_shop.dto.AccountDTO;
import diamond_shop.diamond_shop.dto.LoginDTO;
import diamond_shop.diamond_shop.dto.LoginMessageDTO;

public interface AccountService {
    String addAccount(AccountDTO accountDTO);
    LoginMessageDTO loginAccount(LoginDTO loginDTO);
}
