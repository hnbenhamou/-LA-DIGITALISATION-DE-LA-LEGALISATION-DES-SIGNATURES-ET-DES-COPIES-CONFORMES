package com.prjt.egalisation.Service;

import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Entity.Egalisation;
import com.prjt.egalisation.Entity.copie_conforme;
import com.prjt.egalisation.Repository.EgalisationRepository;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@Service
public class EgalisationService {

    @Autowired
    private  EgalisationRepository egalisationRepository;


    public void saveEgalisation(Egalisation egalisation) {
        egalisationRepository.save(egalisation);
    }

    public List<Egalisation> getAllEgalisations() {
        return egalisationRepository.findAll();
    }

    public Optional<Egalisation> getEgalisationById(Long id) {
        return egalisationRepository.findById(id);
    }

    public void deleteEgalisationById(Long id) {
        egalisationRepository.deleteById(id);
    }

    public List<Egalisation> getAllEtatFalseEgalisations() {
        return egalisationRepository.findAllByEtatFalse();
    }


    public static String saveFile(MultipartFile file) throws IOException {
        String uploadDirectory = "src/main/resources/demande/";

        // Get the file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        // Copy the file to the upload location
        Path targetLocation = Paths.get(uploadDirectory + fileName);
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

        return fileName; // Return the file name or path as needed
    }

    public  void updateEgalisationEtatToTrue(Long id) {

        Optional<Egalisation> optionalEgalisation = egalisationRepository.findById(id);
        if (optionalEgalisation.isPresent()) {
            Egalisation egalisation = optionalEgalisation.get();
            egalisation.setEtat(true);
            egalisationRepository.save(egalisation);
        }
    }
    public List<Egalisation> getCopieConformeListForCitoyen(Citoyen citoyen) {
        return egalisationRepository.findAllByCitoyenAndEtatIsTrue(citoyen);
    }


}
