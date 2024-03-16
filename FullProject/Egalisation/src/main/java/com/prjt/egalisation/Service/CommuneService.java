package com.prjt.egalisation.Service;

import com.prjt.egalisation.Repository.CommuneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CommuneService {

    @Autowired
    private CommuneRepository communeRepository;


    public long getCommuneCount() {
        return communeRepository.count();
    }

    public Map<String, Long> countCommunesByCity() {
        return communeRepository.countCommunesByCity();
    }
}
