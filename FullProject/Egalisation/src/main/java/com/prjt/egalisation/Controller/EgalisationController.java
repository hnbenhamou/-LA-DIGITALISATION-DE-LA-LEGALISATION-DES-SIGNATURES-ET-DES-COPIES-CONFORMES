package com.prjt.egalisation.Controller;

import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.element.Image;
import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Entity.Egalisation;
import com.prjt.egalisation.Entity.copie_conforme;
import com.prjt.egalisation.Service.CitoyenService;
import com.prjt.egalisation.Service.EgalisationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.Document;
import java.awt.*;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/egalisation")
public class EgalisationController {

    @Autowired
    private EgalisationService egalisationService;
    @Autowired
    private CitoyenService citoyenService;


    @PostMapping(value = "/add", consumes = { "multipart/form-data" })
    public ResponseEntity<String> addEgalisation(@RequestPart("file") MultipartFile file,
                                                 @ModelAttribute("id") String id) {
        Egalisation egalisation = new Egalisation();

        try {
            if (!file.isEmpty()) {
                try {
                    String filePath = EgalisationService.saveFile(file); // Save file and get the file path

                    // Set the signature file path in the Citoyen object
                    egalisation.setDocument(filePath);
                    Optional<Citoyen> optionalCitoyen = citoyenService.getCitoyenByCni(id);
                    Citoyen citoyen = optionalCitoyen.get();
                    egalisation.setCitoyen(citoyen);
                    // Save the Citoyen with the signature
                    egalisationService.saveEgalisation(egalisation);
                    return new ResponseEntity<>("Egalisation saved successfully", HttpStatus.CREATED);
                } catch (IOException ep) {
                    throw new RuntimeException(ep);
                }
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to save Egalisation: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return null;
    }



    @GetMapping("/all")
    public ResponseEntity<List<Egalisation>> getAllEgalisations() {
        List<Egalisation> egalisations = egalisationService.getAllEgalisations();
        return new ResponseEntity<>(egalisations, HttpStatus.OK);
    }

    @GetMapping("/pending")
    public ResponseEntity<List<Egalisation>> getAllPendingEgalisations() {
        List<Egalisation> egalisations = egalisationService.getAllEtatFalseEgalisations();
        return new ResponseEntity<>(egalisations, HttpStatus.OK);
    }

    @PostMapping("/egalise/{id}")
    public ResponseEntity<String> addImageToEgalisation(@PathVariable("id") Long egalisationId) {
        try {


            Optional<Egalisation> optionalEgalisation = egalisationService.getEgalisationById(egalisationId);

            if (optionalEgalisation.isPresent()) {
                Egalisation egalisation = optionalEgalisation.get();

                ClassLoader classLoader = getClass().getClassLoader();
                Path signaturePath = Paths.get(classLoader.getResource("signature.jpg").toURI());
                byte[] signatureImage = Files.readAllBytes(signaturePath);

                Path cachePath = Paths.get(classLoader.getResource("cach.png").toURI());
                byte[] cacheImage = Files.readAllBytes(cachePath);

                Image cache = new Image(ImageDataFactory.create(cacheImage));
                cache.scaleToFit(150, 50);
                cache.setFixedPosition(400, 50);



                PdfReader reader = new PdfReader("src/main/resources/demande/" + egalisation.getDocument());
                PdfWriter writer = new PdfWriter(new FileOutputStream("src/main/resources/egalise/" + egalisation.getDocument()));

                PdfDocument pdfDoc = new PdfDocument(reader, writer);
                com.itextpdf.layout.Document document = new com.itextpdf.layout.Document(pdfDoc);

                Image signature = new Image(ImageDataFactory.create(signatureImage));
                signature.scaleToFit(150, 50);
                signature.setFixedPosition(400, 50);

                document.add(signature); // Add the image to the existing PDF document
                document.add(cache);

                document.close();
                pdfDoc.close();
                egalisationService.updateEgalisationEtatToTrue(egalisationId);

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

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Egalisation>> getEgalisationById(@PathVariable Long id) {
        Optional<Egalisation> egalisation = egalisationService.getEgalisationById(id);
        if (egalisation.isPresent()) {
            return new ResponseEntity<>(egalisation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEgalisationById(@PathVariable Long id) {
        try {
            egalisationService.deleteEgalisationById(id);
            return new ResponseEntity<>("Egalisation deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Egalisation: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/byCitoyen/{cni}")
    public List<Egalisation> getCopieConformeListForCitoyen(@PathVariable String cni) {
        // Assuming you have a method to get Citoyen by ID in your service
        Citoyen citoyen = citoyenService.getCitoyenByCni(cni).get();
        return egalisationService.getCopieConformeListForCitoyen(citoyen);
    }
}
