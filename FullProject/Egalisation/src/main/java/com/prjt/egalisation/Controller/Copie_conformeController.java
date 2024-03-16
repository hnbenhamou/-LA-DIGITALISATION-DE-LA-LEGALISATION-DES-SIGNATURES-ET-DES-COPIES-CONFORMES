package com.prjt.egalisation.Controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.element.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.prjt.egalisation.Entity.*;
import com.prjt.egalisation.Service.*;

@RestController
@RequestMapping("/copie")
public class Copie_conformeController {
      
	
	
    @Autowired
    private Copie_conformeService copieService;
    @Autowired
    private CitoyenService citoyenService;


    @PostMapping(value = "/add", consumes = { "multipart/form-data" })
    public ResponseEntity<String> addCopie(@RequestPart("file") MultipartFile file,
                                                 @ModelAttribute("id") String id) {
        copie_conforme copie = new copie_conforme();

        try {
            if (!file.isEmpty()) {
                try {
                    String filePath = copieService.saveFile(file); // Save file and get the file path
                    // Set the signature file path in the Citoyen object
                    copie.setDocument(filePath);
                    Optional<Citoyen> optionalCitoyen = citoyenService.getCitoyenByCni(id);
                    Citoyen citoyen = optionalCitoyen.get();
                    copie.setCitoyen(citoyen);
                    // Save the Citoyen with the signature
                   copieService.savecopie(copie);
                    return new ResponseEntity<>("Egalisation saved successfully", HttpStatus.CREATED);
                } catch (IOException ep) {
                    throw new RuntimeException(ep);
                }
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to save Copie: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return null;
    }

    @GetMapping("/pending")
    public ResponseEntity<List<copie_conforme>> getAllPendingCopie() {
        List<copie_conforme> copie = copieService.getAllEtatFalseCopie();
        return new ResponseEntity<>(copie, HttpStatus.OK);
    }

    @PostMapping("/egalise/{id}")
    public ResponseEntity<String> addImageToEgalisation(@PathVariable("id") Long copieId) {
        try {


            Optional<copie_conforme> optionalCopie = copieService.getCopieById(copieId);

            if (optionalCopie.isPresent()) {
                copie_conforme copie = optionalCopie.get();

                ClassLoader classLoader = getClass().getClassLoader();
                Path signaturePath = Paths.get(classLoader.getResource("signature.jpg").toURI());
                byte[] signatureImage = Files.readAllBytes(signaturePath);

                Path cachePath = Paths.get(classLoader.getResource("cach.png").toURI());
                byte[] cacheImage = Files.readAllBytes(cachePath);

                Image cache = new Image(ImageDataFactory.create(cacheImage));
                cache.scaleToFit(150, 50);
                cache.setFixedPosition(400, 50);



                PdfReader reader = new PdfReader("src/main/resources/demande_copie/" + copie.getDocument());
                PdfWriter writer = new PdfWriter(new FileOutputStream("src/main/resources/egalise/" + copie.getDocument()));

                PdfDocument pdfDoc = new PdfDocument(reader, writer);
                com.itextpdf.layout.Document document = new com.itextpdf.layout.Document(pdfDoc);

                Image signature = new Image(ImageDataFactory.create(signatureImage));
                signature.scaleToFit(150, 50);
                signature.setFixedPosition(400, 50);

                document.add(signature); // Add the image to the existing PDF document
                document.add(cache);

                document.close();
                pdfDoc.close();
                copieService.updateCopieEtatToTrue(copieId);

                return new ResponseEntity<>("Image added to Egalisation document successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Egalisation not found", HttpStatus.NOT_FOUND);
            }
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to add image to Egalisation document", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCopieById(@PathVariable Long id) {
        try {
            copieService.deleteCopieById(id);
            return new ResponseEntity<>("Egalisation deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Egalisation: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/byCitoyen/{cni}")
    public List<copie_conforme> getCopieConformeListForCitoyen(@PathVariable String cni) {
        // Assuming you have a method to get Citoyen by ID in your service
        Citoyen citoyen = citoyenService.getCitoyenByCni(cni).get();
        return copieService.getCopieConformeListForCitoyen(citoyen);
    }
}
