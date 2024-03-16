package com.prjt.egalisation.Entity;

import java.io.Serializable;
import java.util.Date;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor

public class Egalisation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_e;
    public String document;
    @ManyToOne
    private Fonctionnaire fonct;
    @ManyToOne
    private Citoyen  citoyen;
    private Date date = new Date();
    private boolean etat = false;
}
