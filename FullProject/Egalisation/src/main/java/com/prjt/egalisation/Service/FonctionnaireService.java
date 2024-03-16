package com.prjt.egalisation.Service;

import com.prjt.egalisation.Entity.Fonctionnaire;
import com.prjt.egalisation.Repository.FonctionnaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class FonctionnaireService {

    @Autowired
    private  FonctionnaireRepository fonctionnaireRepository;

    public void saveFonctionnaire(Fonctionnaire fonctionnaire) {
        fonctionnaireRepository.save(fonctionnaire);
    }

    public List<Fonctionnaire> getAllFonctionnaires() {
        return fonctionnaireRepository.findAll();
    }

    public Optional<Fonctionnaire> getFonctionnaireById(Long id) {
        return fonctionnaireRepository.findById(id);
    }

    public void deleteFonctionnaireById(Long id) {
        fonctionnaireRepository.deleteById(id);
    }

    public long getFonctionnaireCount() {
        return fonctionnaireRepository.count();
    }

    public Map<String, Long> countFonctionnairesByCity() {
        return fonctionnaireRepository.countFonctionnairesByCity();
    }
}

