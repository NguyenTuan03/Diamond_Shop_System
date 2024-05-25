package diamond_shop.diamond_shop.entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@NoArgsConstructor
@Entity
@Table(name = "[Role]")
public class RoleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Role_id")
    private int Role_id;

    @Column(name = "Name_role")
    private String Name_role;

    @OneToMany(mappedBy = "Role_id", cascade = CascadeType.ALL)
    private List<AccountEntity> users;
}
