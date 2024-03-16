package com.prjt.egalisation.Controller;

import com.prjt.egalisation.Entity.Admin;
import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Service.AdminService;
import com.prjt.egalisation.Service.CitoyenService;
import com.prjt.egalisation.Service.InscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("http://localhost:3000/")

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private CitoyenService citoyenService;

    @Autowired
    private InscriptionService inscriptionService;




    @GetMapping("/pendingRegistrations")
    public ResponseEntity<List<Citoyen>> displayPendingRegistrations() {
        List<Citoyen> citoyens = citoyenService.getAllPendingRegistrations();
        return new ResponseEntity<>(citoyens, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<String> addAdmin(@RequestBody Admin admin) {
        try {
            adminService.saveAdmin(admin);
            return new ResponseEntity<>("Admin saved successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to save Admin: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Admin>> getAllAdmins() {
        List<Admin> admins = adminService.getAllAdmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable Long id) {
        Optional<Admin> admin = adminService.getAdminById(id);
        if (admin != null) {
            return new ResponseEntity<>(admin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAdminById(@PathVariable Long id) {
        try {
            adminService.deleteAdminById(id);
            return new ResponseEntity<>("Admin deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Admin: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

