package com.prjt.egalisation.Controller;

import com.prjt.egalisation.Entity.Admin;
import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Entity.Inscription;
import com.prjt.egalisation.Repository.CitoyenRepository;
import com.prjt.egalisation.Service.AdminService;
import com.prjt.egalisation.Service.CitoyenService;
import com.prjt.egalisation.Service.InscriptionService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.*;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/citoyen")
public class CitoyenController {

    @Autowired
    private CitoyenService citoyenService;
    @Autowired
    private InscriptionService inscriptionService;
    @Autowired
    private AdminService adminService;
    @Autowired
    private CitoyenRepository citoyenRepository;



    @PostMapping(value = "/add", consumes = { "multipart/form-data" })
    public ResponseEntity<String> addCitoyen(@RequestParam("file") MultipartFile file, @ModelAttribute("name") String nom , @ModelAttribute("prenom") String prenom ,
                                             @ModelAttribute("date") String date ,@ModelAttribute("adresse") String adresse ,@ModelAttribute("num_tel") String num_tel ,
                                             @ModelAttribute("email") String email ,@ModelAttribute("password") String password ,@ModelAttribute("status") String status ,@ModelAttribute("CNI") String cni ) {



        Citoyen citoyen = new Citoyen();



        try {
            if (!file.isEmpty()) {
                String filePath = citoyenService.saveFile(file); // Save file and get the file path

                // Set the signature file path in the Citoyen object
                citoyen.setSignature(filePath);
                citoyen.setNom(nom);
                citoyen.setPrenom(prenom);
                citoyen.setDate_nais(date);
                citoyen.setNum_tel(num_tel);
                citoyen.setEmail(email);
                citoyen.setPassword(password);
                citoyen.setCni(cni);
                citoyen.setAdr(adresse);


                // Save the Citoyen with the signature
                citoyenService.saveCitoyen(citoyen);




                return new ResponseEntity<>("Citoyen saved successfully", HttpStatus.CREATED);
            }
        }
        catch (Exception e) {
            return new ResponseEntity<>("Failed to save Citoyen: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
    }

    @GetMapping("/all")
    public ResponseEntity<List<Citoyen>> getAllCitoyens() {
        List<Citoyen> citoyens = citoyenService.getAllCitoyens();
        return new ResponseEntity<>(citoyens, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Citoyen>> getCitoyenById(@PathVariable Long id) {
        Optional<Citoyen> citoyen = citoyenService.getCitoyenById(id);
        if (citoyen != null) {
            return new ResponseEntity<>(citoyen, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCitoyenById(@PathVariable Long id) {
        try {
            citoyenService.deleteCitoyenById(id);
            return new ResponseEntity<>("Citoyen deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Citoyen: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}/approve")
    public Citoyen approveCitizen(@PathVariable Long id) {
        return citoyenService.approveCitizen(id);
    }

    @PutMapping("/{id}/reject")
    public Citoyen rejectCitizen(@PathVariable Long id) {
        return citoyenService.rejectCitoyen(id);
    }

    @GetMapping
    public List<Citoyen> getCitizens() {
        return citoyenService.getCitoyen();
    }

    @PostMapping("/{cni}/{password}")
    public Map<String, String> login(@PathVariable String cni ,@PathVariable String password){


        Map<String, String> responseMap = new HashMap<>();

        if("admin".equals(cni) && "admin".equals(password)){
            responseMap.put("role", "admin");
            responseMap.put("CNI",cni);

            return responseMap;
        }

        if (cni != null && password != null) {
            List<Object[]> results = citoyenRepository.findCitoyenByType(cni, password);
            Object[] result = results.get(0);
            String C = (String) result[0];
            String P = (String) result[1];
            System.out.println(P);
            if (C.equals(cni) && P.equals(password))
            {
                responseMap.put("role", "citoyen");
                responseMap.put("CNI",cni);
                return responseMap;
            }
        }
        responseMap.put("role", "invalid");
        return responseMap;
    }

}

