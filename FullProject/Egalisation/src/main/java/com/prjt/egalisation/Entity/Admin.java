package com.prjt.egalisation.Entity;



import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@DiscriminatorValue("A")
public class Admin extends Personne{

    public String poste;
    @OneToOne(cascade= CascadeType.ALL)
    private Arrondissement arrond;
    @OneToOne(cascade=CascadeType.ALL)
    private Commune commune;

}
