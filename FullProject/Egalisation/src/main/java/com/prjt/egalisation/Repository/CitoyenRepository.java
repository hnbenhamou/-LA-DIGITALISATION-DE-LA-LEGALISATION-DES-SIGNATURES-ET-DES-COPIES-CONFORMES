package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Citoyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.lang.annotation.Native;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface CitoyenRepository extends JpaRepository<Citoyen,Long> {

    long count();
    @Query(value = "SELECT c.city, COUNT(c) FROM Citoyen c GROUP BY c.city")
    Map<String, Long> countCitoyensByCity();
    @Query(value = "SELECT cni , password FROM personne WHERE cni = :cni AND user_type = 'C' And Password=:password " , nativeQuery = true)
    List<Object[]> findCitoyenByType(@Param("cni") String cni, @Param("password") String password);

    Optional<Citoyen> findByCni(String cni);

    List<Citoyen> findByActivatedFalse();

    Optional<Citoyen> getByCni(String cni);

    List<Citoyen> getAllCitizensByActivatedAndRejected(boolean activated, boolean rejected);


}
