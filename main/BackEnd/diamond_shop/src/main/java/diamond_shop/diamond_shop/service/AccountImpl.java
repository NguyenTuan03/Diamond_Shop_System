package diamond_shop.diamond_shop.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import diamond_shop.diamond_shop.dto.AccountDTO;
import diamond_shop.diamond_shop.dto.LoginDTO;
import diamond_shop.diamond_shop.dto.LoginMessageDTO;
import diamond_shop.diamond_shop.entity.AccountEntity;
import diamond_shop.diamond_shop.entity.RoleEntity;
import diamond_shop.diamond_shop.repository.AccountRepository;
import diamond_shop.diamond_shop.repository.RoleRepository;

@Service
public class AccountImpl implements AccountService{
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addAccount(AccountDTO a) {
        
        RoleEntity role = roleRepository.findById(5)
                .orElseThrow(() -> new RuntimeException("Role not found"));

        AccountEntity account = new AccountEntity(
            role,
            a.getUsername(), 
            a.getFullname(),
            a.getPhonenumber(),
            this.passwordEncoder.encode(a.getPassword())
        );
        accountRepository.save(account);
        return account.getUsername();
    }
    
    @Override
    public LoginMessageDTO loginAccount(LoginDTO loginDTO) {
        AccountDTO acc2 = new AccountDTO();
        AccountEntity acc1 = accountRepository.findByUserName(loginDTO.getUsername());
        if (acc1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = acc1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<AccountEntity> account = accountRepository.findOneByUserNameAndPassword(loginDTO.getUsername(), encodedPassword);
                if (account.isPresent()) {
                    acc2.setAccountid(acc1.getId());
                    acc2.setFullname(acc1.getFullname());
                    acc2.setUsername(acc1.getUsername());
                    acc2.setPhonenumber(acc1.getPhone_number());
                    return new LoginMessageDTO("Login Success", true, acc2);
                } else {
                    return new LoginMessageDTO("Login Failed", false);
                }
            } else {
                return new LoginMessageDTO("password Not Match", false);
            }
        }else {
            return new LoginMessageDTO("Email not exits", false);
        }
    }
}
