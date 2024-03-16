package com.prjt.egalisation.Entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data @NoArgsConstructor @AllArgsConstructor

@Entity
public class Inscription implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_i;
    @ManyToOne
    private Admin admin;
    @OneToOne
    private Citoyen citoyen;
    private Date date ;
    private boolean etat;
}
