package diamond_shop.diamond_shop.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="[User]")
public class AccountEntity {
    @SequenceGenerator(
        name = "User_sequence",
        sequenceName = "User",
        allocationSize = 1
    )
    @Id
    @Column(name = "User_Id")
    private String User_Id;

    @Column(name = "Role_Id")
    private String Role_Id;

    @Column(name = "User_Name")
    private String User_Name;

    @Column(name = "Password")
    private String Password;

    @Column(name = "Full_Name")
    private String Full_Name;

    @Column(name = "Email")
    private String Email;

    @Column(name = "Phone")
    private String Phone;

    @Column(name = "Address")
    private String Address;

    public AccountEntity(String User_Id, String user_Name, String email, String password) {
        this.User_Id = User_Id;
        this.User_Name = user_Name;
        this.Password = password;
        this.Email = email;
    }

    public AccountEntity(String user_Name,String email, String password) {
        this.User_Name = user_Name;
        this.Email = email;
        this.Password = password;
    }
    
}
