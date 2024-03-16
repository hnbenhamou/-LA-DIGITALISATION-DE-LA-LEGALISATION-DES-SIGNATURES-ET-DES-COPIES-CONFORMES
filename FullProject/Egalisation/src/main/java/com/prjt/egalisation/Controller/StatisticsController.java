package com.prjt.egalisation.Controller;

import com.prjt.egalisation.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    private ArrondissementService arrondissementService;
    @Autowired
    private CommuneService communeService;
    @Autowired
    private AdminService adminService;
    @Autowired
    private FonctionnaireService fonctionnaireService;
    @Autowired
    private CitoyenService citoyenService;

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> getStatisticsCount() {
        Map<String, Long> statistics = new HashMap<>();
        statistics.put("citoyenCount", citoyenService.getCitoyenCount());
        statistics.put("communeCount", communeService.getCommuneCount());
        statistics.put("arrondissementCount", arrondissementService.getArrondissementCount());
        statistics.put("adminCount", adminService.getAdminCount());
        statistics.put("fonctionnaireCount", fonctionnaireService.getFonctionnaireCount());


        return ResponseEntity.ok(statistics);
    }

    @GetMapping("/percity")
    public ResponseEntity<Map<String, Map<String, Long>>> getStatisticsPerCity() {
        Map<String, Map<String, Long>> statistics = new HashMap<>();

        //statistics.put("citoyenPerCity", citoyenService.countCitoyensByCity());

        statistics.put("adminPerCity", adminService.countAdminsByCity());

        //statistics.put("communePerCity", communeService.countCommunesByCity());
        /*statistics.put("arrondissementPerCity", arrondissementService.countArrondissementsByCity());
        statistics.put("adminPerCity", adminService.countAdminsByCity());
        statistics.put("fonctionnairePerCity", fonctionnaireService.countFonctionnairesByCity());
        */

        return ResponseEntity.ok(statistics);
    }
}
