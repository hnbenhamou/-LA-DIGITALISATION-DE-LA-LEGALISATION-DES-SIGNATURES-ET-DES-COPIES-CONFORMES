package com.prjt.egalisation.Entity;


import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Commune implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_com;
    private String nom;
    private String adresse;
    private String city;
    @OneToOne
    private Admin admin;
    @OneToMany
    private List<Fonctionnaire> fonctionnaire;
    @OneToMany
    private List<Citoyen> citoyen;
    @ManyToOne
    private Arrondissement arrond ;
}
