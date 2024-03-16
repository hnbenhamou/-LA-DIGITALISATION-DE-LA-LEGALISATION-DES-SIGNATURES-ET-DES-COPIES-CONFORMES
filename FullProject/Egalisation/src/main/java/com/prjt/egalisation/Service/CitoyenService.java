package com.prjt.egalisation.Service;

import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Repository.CitoyenRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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
import java.util.Map;
import java.util.Optional;

@Service
public class CitoyenService {
    @Autowired
    private CitoyenRepository citoyenRepository;

    public Optional<Citoyen> getCitoyenByCni(String cni) {
        return citoyenRepository.getByCni(cni);
    }

    public void saveCitoyen(Citoyen citoyen) {
        citoyenRepository.save(citoyen);
    }

    public List<Citoyen> getAllCitoyens() {
        return citoyenRepository.findAll();
    }

    public Optional<Citoyen> getCitoyenById(Long id) {
        return citoyenRepository.findById(id);
    }

    public void deleteCitoyenById(Long id) {
        citoyenRepository.deleteById(id);
    }

    public long getCitoyenCount() {
        return citoyenRepository.count();
    }

    public Map<String, Long> countCitoyensByCity() {
        return citoyenRepository.countCitoyensByCity();
    }

    public List<Citoyen> getAllPendingRegistrations() {
        return citoyenRepository.findByActivatedFalse();
    }

    public String saveFile(MultipartFile file) throws IOException {
        String uploadDirectory = "src/main/resources/signature/";

        // Get the file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        // Copy the file to the upload location
        Path targetLocation = Paths.get(uploadDirectory + fileName);
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

        return fileName; // Return the file name or path as needed
    }

    public Citoyen save(Citoyen citizen) {
        if (!citizen.isRejected()) {
            return citoyenRepository.save(citizen);
        }
        return null;
    }

    public Citoyen approveCitizen(Long id) {
        Citoyen citizen = citoyenRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Citizen not found"));

        citizen.setActivated(true);
        citizen.setRejected(false);
        sendEmail(citizen.getEmail(), "Verification of your account","Hello dear, \nCongrats! your account has been activated succesfully.\n You can consult the platform whenever you want");

        return citoyenRepository.save(citizen);

    }

    public Citoyen rejectCitoyen(Long id) {
        Citoyen citoyen = citoyenRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Citizen not found"));
        citoyenRepository.delete(citoyen);


        //citizen.setRejected(true);
        //citizen.setApproved(false);
        //return citizenRepository.save(citizen);
        sendEmail(citoyen.getEmail(), "verification account","your account has been rejected");
        return citoyen;
    }

    public List<Citoyen> getCitoyen() {
        return citoyenRepository.getAllCitizensByActivatedAndRejected(false, false);
    }

    public Optional<Citoyen> findCitoyenByCni(String cni) {
        return citoyenRepository.findByCni(cni);
    }
    public Citoyen findById(Long id) {
        return citoyenRepository.findById(id).orElse(null);
    }
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        javaMailSender.send(message);
    }

}
