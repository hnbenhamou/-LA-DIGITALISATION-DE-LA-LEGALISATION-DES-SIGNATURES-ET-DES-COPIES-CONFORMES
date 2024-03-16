package com.prjt.egalisation.Service;

import com.prjt.egalisation.Entity.Admin;
import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Repository.AdminRepository;
import com.prjt.egalisation.Repository.CitoyenRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private CitoyenRepository citoyenRepository;


    public void saveAdmin(Admin admin) {
        // Additional logic or validation can be added here
        adminRepository.save(admin);
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<Admin> getAdminById(Long id) {
        return adminRepository.findById(id);
    }

    public void deleteAdminById(Long id) {
        adminRepository.deleteById(id);
    }

    public long getAdminCount() {
        return adminRepository.count();
    }

    public Map<String, Long> countAdminsByCity() {

        return adminRepository.countAdminsByCity();
    }


}


