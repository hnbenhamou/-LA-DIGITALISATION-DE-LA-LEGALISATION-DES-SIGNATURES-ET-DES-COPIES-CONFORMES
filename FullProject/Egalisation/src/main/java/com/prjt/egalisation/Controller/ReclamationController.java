package com.prjt.egalisation.Controller;

import com.prjt.egalisation.Entity.Reclamation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.prjt.egalisation.Service.ReclamationService;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reclamation")
public class ReclamationController {

    @Autowired
    private  ReclamationService reclamationService;



    @PostMapping("/add")
    public ResponseEntity<String> addReclamation(@RequestBody Reclamation reclamation) {
        try {
            reclamationService.saveReclamation(reclamation);
            return new ResponseEntity<>("Reclamation saved successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to save Reclamation: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Reclamation>> getAllReclamations() {
        List<Reclamation> reclamations = reclamationService.getAllReclamations();
        return new ResponseEntity<>(reclamations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Reclamation>> getReclamationById(@PathVariable Long id) {
        Optional<Reclamation> reclamation = reclamationService.getReclamationById(id);
        if (reclamation.isPresent()) {
            return new ResponseEntity<>(reclamation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteReclamationById(@PathVariable Long id) {
        try {
            reclamationService.deleteReclamationById(id);
            return new ResponseEntity<>("Reclamation deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Reclamation: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

