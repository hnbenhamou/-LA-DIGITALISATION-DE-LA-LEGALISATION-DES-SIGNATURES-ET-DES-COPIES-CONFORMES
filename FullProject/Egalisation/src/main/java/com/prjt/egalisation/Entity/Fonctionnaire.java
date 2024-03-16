package com.prjt.egalisation.Entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@DiscriminatorValue("F")
public class Fonctionnaire extends Personne {

    private String poste;
    @OneToMany
    private List<Modification> modif;
    @OneToMany
    private List<Egalisation> egal;
    @OneToMany
    private List<Reclamation> reclamation;
    @ManyToOne
    private Commune commune;
    @ManyToOne
    private Arrondissement arrond;
}
