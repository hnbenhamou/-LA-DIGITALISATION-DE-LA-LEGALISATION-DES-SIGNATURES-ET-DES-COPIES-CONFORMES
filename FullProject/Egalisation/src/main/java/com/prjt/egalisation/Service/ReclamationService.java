package com.prjt.egalisation.Service;

import com.prjt.egalisation.Entity.Reclamation;
import com.prjt.egalisation.Repository.ReclamationRepository;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Service
public class ReclamationService {
    @Autowired
    private ReclamationRepository reclamationRepository;

    @Autowired
    public ReclamationService(ReclamationRepository reclamationRepository) {
        this.reclamationRepository = reclamationRepository;
    }

    public void saveReclamation(Reclamation reclamation) {
        reclamationRepository.save(reclamation);
    }

    public List<Reclamation> getAllReclamations() {
        return reclamationRepository.findAll();
    }

    public Optional<Reclamation> getReclamationById(Long id) {
        return reclamationRepository.findById(id);
    }

    public void deleteReclamationById(Long id) {
        reclamationRepository.deleteById(id);
    }

}
