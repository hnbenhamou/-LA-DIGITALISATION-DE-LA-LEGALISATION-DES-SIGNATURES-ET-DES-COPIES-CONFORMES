package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Arrondissement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Map;

public interface ArrondissementRepository extends JpaRepository<Arrondissement,Long> {
    long count();
    @Query("SELECT a.city, COUNT(a) FROM Arrondissement a GROUP BY a.city")
    Map<String, Long> countArrondissementsByCity();
}
