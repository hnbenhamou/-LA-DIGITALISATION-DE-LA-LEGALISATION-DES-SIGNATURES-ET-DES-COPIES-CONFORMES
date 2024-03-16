package com.prjt.egalisation.Repository;

import com.prjt.egalisation.Entity.Modification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModificationRepository extends JpaRepository<Modification,Long> {
}
