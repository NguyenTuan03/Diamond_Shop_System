package diamond_shop.diamond_shop.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import diamond_shop.diamond_shop.dto.AccountDTO;
import diamond_shop.diamond_shop.dto.LoginDTO;
import diamond_shop.diamond_shop.dto.LoginMessageDTO;
import diamond_shop.diamond_shop.entity.AccountEntity;
import diamond_shop.diamond_shop.repository.AccountRepository;

@Service
public class AccountImpl implements AccountService{
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    // private AccountDTO accountDTO;
    @Override
    public String addAccount(AccountDTO a) {
        AccountEntity account = new AccountEntity(
            a.getAccountid(),
            a.getAccountname(), 
            a.getEmail(), 
            this.passwordEncoder.encode(a.getPassword()));
        accountRepository.save(account);
        return account.getUser_Name();
    }
    @Override
    public LoginMessageDTO loginAccount(LoginDTO loginDTO) {
        // TODO Auto-generated method stub
        return null;
    }
    
    // @Override
    // public LoginMessageDTO loginAccount(LoginDTO loginDTO) {
    //     String msg = "";
    //     AccountEntity acc1 = accountRepository.findByEmail(loginDTO.getEmail());
    //     if (acc1 != null) {
    //         String password = loginDTO.getPassword();
    //         String encodedPassword = acc1.getPassword();
    //         Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
    //         if (isPwdRight) {
    //             Optional<AccountEntity> account = accountRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
    //             if (account.isPresent()) {
    //                 return new LoginMessageDTO("Login Success", true);
    //             } else {
    //                 return new LoginMessageDTO("Login Failed", false);
    //             }
    //         } else {
    //             return new LoginMessageDTO("password Not Match", false);
    //         }
    //     }else {
    //         return new LoginMessageDTO("Email not exits", false);
    //     }
    // }
}
