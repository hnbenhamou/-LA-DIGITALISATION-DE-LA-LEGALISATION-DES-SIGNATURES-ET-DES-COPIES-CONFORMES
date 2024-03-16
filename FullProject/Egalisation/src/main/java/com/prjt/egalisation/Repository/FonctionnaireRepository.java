package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Fonctionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Map;

public interface FonctionnaireRepository extends JpaRepository<Fonctionnaire,Long> {
    long count();
    @Query("SELECT f.city, COUNT(f) FROM Fonctionnaire f GROUP BY f.city")
    Map<String, Long> countFonctionnairesByCity();
}
