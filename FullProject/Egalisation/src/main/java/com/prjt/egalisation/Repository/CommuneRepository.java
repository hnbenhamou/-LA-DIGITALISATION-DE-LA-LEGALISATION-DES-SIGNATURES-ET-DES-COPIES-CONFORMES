package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Commune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Map;

public interface CommuneRepository extends JpaRepository<Commune,Long> {
    long count();
    @Query("SELECT c.city, COUNT(c) FROM Commune c GROUP BY c.city")
    Map<String, Long> countCommunesByCity();
}
