package com.prjt.egalisation.Entity;

import java.util.List;

import com.prjt.egalisation.util.ConfirmationCodeGenerator;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@DiscriminatorValue("C")
public class Citoyen extends Personne{

    private String confirmationCode = ConfirmationCodeGenerator.generateConfirmationCode();
    private boolean activated = false;
    private boolean rejected = false;
    private boolean approved = false;
    @OneToMany
    private List<Modification> modification;
    @OneToMany
    private List<Egalisation> egalisation;
    @OneToMany
    private List<Reclamation> reclamation;
    @ManyToOne
    private Commune commune;
    private String signature;

}
