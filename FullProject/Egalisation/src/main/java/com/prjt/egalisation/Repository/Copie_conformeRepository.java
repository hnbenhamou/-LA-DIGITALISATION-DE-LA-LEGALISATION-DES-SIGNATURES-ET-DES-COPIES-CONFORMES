package com.prjt.egalisation.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.prjt.egalisation.Entity.*;

public interface Copie_conformeRepository extends JpaRepository<copie_conforme,Long> {

    @Query("SELECT e FROM copie_conforme e WHERE e.etat = false")
    List<copie_conforme> findAllByEtatFalse();

    List<copie_conforme> findByCitoyen(Citoyen citoyen);

    List<copie_conforme> findAllByCitoyenAndEtatIsTrue(Citoyen citoyen);


}
