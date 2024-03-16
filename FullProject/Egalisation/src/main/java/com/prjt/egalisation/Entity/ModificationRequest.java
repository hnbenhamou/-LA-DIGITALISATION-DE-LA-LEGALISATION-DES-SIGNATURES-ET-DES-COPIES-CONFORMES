package com.prjt.egalisation.Entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class ModificationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String cni;
    private String nom ;
    private String prenom;
    @Temporal(TemporalType.DATE)
    private Date date_nais;
    private String adr;
    private String city;
    private String num_tel;
    private String password;
    private String document;
}
