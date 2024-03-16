package com.prjt.egalisation.Service;

import com.prjt.egalisation.Entity.Citoyen;
import com.prjt.egalisation.Entity.Inscription;
import com.prjt.egalisation.Repository.CitoyenRepository;
import com.prjt.egalisation.Repository.InscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InscriptionService {

    @Autowired
    InscriptionRepository inscriptionRepository;
    @Autowired
    CitoyenRepository citoyenRepository;

    public void saveInscription(Inscription inscription) {
        inscriptionRepository.save(inscription);
    }


    public void update(Inscription inscription) {
        inscription.setEtat(true); // Update etat to true
        inscriptionRepository.save(inscription); // Save the updated entity
    }


    public Inscription getInscriptionByCitoyen(Citoyen citoyen) {
        return null;
                //inscriptionRepository.getInscriptionByCitoyen(citoyen);

    }
}
