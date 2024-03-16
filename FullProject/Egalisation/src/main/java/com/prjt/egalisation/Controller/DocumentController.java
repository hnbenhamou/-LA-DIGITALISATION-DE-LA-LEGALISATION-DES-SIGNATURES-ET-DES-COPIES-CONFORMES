package com.prjt.egalisation.Controller;

import com.prjt.egalisation.util.DocumentGenerator;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;

@Controller
@RestController
@RequestMapping("/form")
public class DocumentController {

    @Autowired
    private DocumentGenerator documentGenerator;


    @GetMapping ("/downloadActeNaissance")
    public void downloadActeNaissance(@RequestParam("nom") String nom,
                                      @RequestParam("prenom") String prenom,
                                      @RequestParam("dateNaissance") String dateNaissance,
                                      @RequestParam("adresse") String adresse,
                                      @RequestParam("commune") String commune,
                                      HttpServletResponse response) {
        try {
            byte[] documentBytes = documentGenerator.generateActeNaissance(nom, prenom, dateNaissance, adresse, commune);

            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "attachment; filename=ActeNaissance_" + nom + "_" + prenom + ".pdf");

            response.getOutputStream().write(documentBytes);
            response.getOutputStream().flush();
        } catch (IOException e) {
            // Handle errors
            e.printStackTrace();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
}
