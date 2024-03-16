package com.prjt.egalisation.Service;

import com.prjt.egalisation.Entity.Arrondissement;
import com.prjt.egalisation.Repository.ArrondissementRepository;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ArrondissementService {

    @Autowired
    private ArrondissementRepository arrondissementRepository;


    public List<Arrondissement> getAllArrondissements() {
        return arrondissementRepository.findAll();
    }

    public Optional<Arrondissement> getArrondissementById(Long id) {
        return arrondissementRepository.findById(id);
    }

    public Arrondissement createArrondissement(Arrondissement arrond) {
        return arrondissementRepository.save(arrond);
    }

    public Arrondissement updateArrondissement(Long id, Arrondissement updatedArrondissement) {
        Optional<Arrondissement> existingArrondOptional = arrondissementRepository.findById(id);
        if (existingArrondOptional.isPresent()) {
            updatedArrondissement.setId_Arrond(id);
            return arrondissementRepository.save(updatedArrondissement);
        }
        return null; // Or throw an exception indicating the entity was not found
    }

    public void deleteArrondissement(Long id) {
        arrondissementRepository.deleteById(id);
    }

    public long getArrondissementCount() {
        return arrondissementRepository.count();
    }
    public Map<String, Long> countArrondissementsByCity() {
        return arrondissementRepository.countArrondissementsByCity();
    }
}

