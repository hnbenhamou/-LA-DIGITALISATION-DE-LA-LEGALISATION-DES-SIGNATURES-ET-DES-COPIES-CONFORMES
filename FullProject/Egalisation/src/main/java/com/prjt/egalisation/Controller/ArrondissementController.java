package com.prjt.egalisation.Controller;

import com.prjt.egalisation.Entity.Arrondissement;
import com.prjt.egalisation.Service.ArrondissementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/arrondissement")
public class ArrondissementController {

    @Autowired
    private  ArrondissementService arrondissementService;


    @GetMapping("/all")
    public ResponseEntity<List<Arrondissement>> getAllArrondissements() {
        List<Arrondissement> arrondissements = arrondissementService.getAllArrondissements();
        return new ResponseEntity<>(arrondissements, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Arrondissement> getArrondissementById(@PathVariable Long id) {
        Optional<Arrondissement> arrondissement = arrondissementService.getArrondissementById(id);
        return arrondissement.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<Arrondissement> createArrondissement(@RequestBody Arrondissement arrondissement) {
        Arrondissement createdArrondissement = arrondissementService.createArrondissement(arrondissement);
        return new ResponseEntity<>(createdArrondissement, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Arrondissement> updateArrondissement(@PathVariable Long id, @RequestBody Arrondissement arrondissement) {
        Arrondissement updatedArrondissement = arrondissementService.updateArrondissement(id, arrondissement);
        return updatedArrondissement != null ?
                new ResponseEntity<>(updatedArrondissement, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteArrondissement(@PathVariable Long id) {
        arrondissementService.deleteArrondissement(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
