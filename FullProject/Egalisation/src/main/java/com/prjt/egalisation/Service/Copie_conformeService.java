package com.prjt.egalisation.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.prjt.egalisation.Entity.*;
import com.prjt.egalisation.Repository.*;

@Service
public class Copie_conformeService {
		
	   @Autowired
	    private  Copie_conformeRepository copieRepository;

		public List<copie_conforme> getAllEtatFalseCopie() {
		return copieRepository.findAllByEtatFalse();
	}

	    public void savecopie(copie_conforme copie) {
	        copieRepository.save(copie);
	    }
	    public static String saveFile(MultipartFile file) throws IOException {
	        String uploadDirectory = "src/main/resources/demande_copie/";

	        // Get the file name
	        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

	        // Copy the file to the upload location
	        Path targetLocation = Paths.get(uploadDirectory + fileName);
	        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

	        return fileName; // Return the file name or path as needed
	    }
	public Optional<copie_conforme> getCopieById(Long id) {
		return copieRepository.findById(id);
	}

	public void deleteCopieById(Long id) {
		copieRepository.deleteById(id);
	}

	public  void updateCopieEtatToTrue(Long id) {

		Optional<copie_conforme> optionalcopie = copieRepository.findById(id);
		if (optionalcopie.isPresent()) {
			copie_conforme egalisation = optionalcopie.get();
			egalisation.setEtat(true);
			copieRepository.save(egalisation);
		}
	}

	public List<copie_conforme> getCopieConformeListForCitoyen(Citoyen citoyen) {
		return copieRepository.findAllByCitoyenAndEtatIsTrue(citoyen);
	}

}
