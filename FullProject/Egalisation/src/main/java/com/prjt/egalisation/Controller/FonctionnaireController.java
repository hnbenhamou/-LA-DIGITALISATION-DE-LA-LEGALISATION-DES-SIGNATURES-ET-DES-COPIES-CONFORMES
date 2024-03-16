package com.prjt.egalisation.Controller;
import com.prjt.egalisation.Entity.Fonctionnaire;
import com.prjt.egalisation.Service.FonctionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fonctionnaire")
public class FonctionnaireController {

    @Autowired
    private FonctionnaireService fonctionnaireService;



    @PostMapping("/add")
    public ResponseEntity<String> addFonctionnaire(@RequestBody Fonctionnaire fonctionnaire) {
        try {
            fonctionnaireService.saveFonctionnaire(fonctionnaire);
            return new ResponseEntity<>("Fonctionnaire saved successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to save Fonctionnaire: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Fonctionnaire>> getAllFonctionnaires() {
        List<Fonctionnaire> fonctionnaires = fonctionnaireService.getAllFonctionnaires();
        return new ResponseEntity<>(fonctionnaires, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Fonctionnaire>> getFonctionnaireById(@PathVariable Long id) {
        Optional<Fonctionnaire> fonctionnaire = fonctionnaireService.getFonctionnaireById(id);
        if (fonctionnaire.isPresent()) {
            return new ResponseEntity<>(fonctionnaire, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFonctionnaireById(@PathVariable Long id) {
        try {
            fonctionnaireService.deleteFonctionnaireById(id);
            return new ResponseEntity<>("Fonctionnaire deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Fonctionnaire: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
