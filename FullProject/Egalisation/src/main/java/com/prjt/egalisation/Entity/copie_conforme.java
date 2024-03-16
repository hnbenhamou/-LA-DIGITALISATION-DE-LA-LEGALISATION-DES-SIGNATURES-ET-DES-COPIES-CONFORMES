package com.prjt.egalisation.Entity;

import java.sql.Blob;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Data @NoArgsConstructor
@AllArgsConstructor
public class copie_conforme {
	  @Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private Long id_c;
	 

	  private String document;
	  @ManyToOne
	  private  Citoyen citoyen;
	  private boolean etat = false ;



	    
}
