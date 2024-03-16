package com.prjt.egalisation.util;

import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.PdfCanvas;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class DocumentGenerator {

    public byte[] generateActeNaissance(String nom, String prenom, String dateNaissance, String adresse, String commune) throws IOException, URISyntaxException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        ClassLoader classLoader = getClass().getClassLoader();
        Path signaturePath = Paths.get(classLoader.getResource("signature.jpg").toURI());
        byte[] signatureImage = Files.readAllBytes(signaturePath);

        try (PdfWriter writer = new PdfWriter(outputStream);
             PdfDocument pdf = new PdfDocument(writer);
             Document document = new Document(pdf)) {

            document.add(new Paragraph("Acte de Naissance"));
            document.add(new Paragraph("Nom et prénom : " + nom + " " + prenom));
            document.add(new Paragraph("Date de naissance : " + dateNaissance));
            document.add(new Paragraph("Adresse : " + adresse));
            document.add(new Paragraph("Commune : " + commune));

            // Get current time
            LocalDateTime currentTime = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String formattedTime = currentTime.format(formatter);

            // Add current time above the signature
            Paragraph timeParagraph = new Paragraph(formattedTime);
            document.add(timeParagraph);

            // Add a space before the signature
            document.add(new Paragraph("\n"));

            // Add the signature
            Image signature = new Image(ImageDataFactory.create(signatureImage));
            signature.scaleToFit(150, 50);
            signature.setFixedPosition(400, 50);
            document.add(signature);
        }

        return outputStream.toByteArray();
    }
}
