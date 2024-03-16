package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Entity.Egalisation;
import com.prjt.egalisation.Entity.copie_conforme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EgalisationRepository extends JpaRepository<Egalisation,Long> {

    @Query("SELECT e FROM Egalisation e WHERE e.etat = false")
    List<Egalisation> findAllByEtatFalse();

    List<Egalisation> findAllByCitoyenAndEtatIsTrue(Citoyen citoyen);
}
