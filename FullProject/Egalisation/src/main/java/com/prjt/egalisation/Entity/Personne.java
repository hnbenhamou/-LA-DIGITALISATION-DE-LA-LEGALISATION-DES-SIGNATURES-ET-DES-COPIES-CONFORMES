package com.prjt.egalisation.Entity;

import java.io.Serializable;
import java.util.Date;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="user_type")
public class Personne implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String cni;
    private String nom ;
    private String prenom;

    private String date_nais;
    private String adr;
    private String city;
    private String num_tel;
    @Column(unique = true)
    private String email;
    private String password;
    private String status;

}
