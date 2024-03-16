package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Map;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    long count();
    @Query("SELECT a.city, COUNT(a) FROM Admin a GROUP BY a.city")
    Map<String, Long> countAdminsByCity();
}
