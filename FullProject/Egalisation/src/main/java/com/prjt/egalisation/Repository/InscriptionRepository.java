package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Entity.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription,Long> {

    Inscription getInscriptionByCitoyen(Optional<Citoyen> citoyen);
}
