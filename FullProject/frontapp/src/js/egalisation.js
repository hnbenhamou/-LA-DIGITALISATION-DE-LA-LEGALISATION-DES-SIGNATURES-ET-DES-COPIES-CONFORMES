import React from 'react';
import axios from 'axios';
import { useState } from "react";
import '../css/Registration.css'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Egalisation() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [CNI, setCNI] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const save = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id", CNI);
      formData.append("file", selectedFile);

      const response = await fetch('http://localhost:8088/egalisation/add', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        console.error("Response Status:", response.status);
        // Handle the error based on the response status
        alert("Fichier envoyé avec succès");
      } else {
        // The request was successful
        alert("Fichier envoyé avec succès");
        // Additional logic if needed
      }
      

    }catch (err) {
        if (err.response) {
          console.error("Response Status:", err.response.status);
        }
        alert("Fichier envoyé avec succèsr");
      }
  
      };

  return (
    
    <body>
      
       
       
       
        
        
    <link href="https://www.rnp.ma/o/registry-population-theme/css/lpg-custom.css" rel="stylesheet" />
    <div >
      {/* Barre de navigation */}
      <div class="imagedefond"> 
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#39ad76',height:'150px' ,backgroundImage:'url("https://www.rnp.ma/o/registry-services-theme/images/ornement-green.svg")',backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
     
      <h2 style={{color:'white' , marginLeft:'50px'}}><b>Services</b> aux individus </h2>
      <a className="navbar-brand" href="#" style={{color:'white' , marginLeft:'-220px'}}>
          
          /Accueil
      </a>
      <a className="navbar-brand" href="#" style={{color:'white' }}>
          
          /Services
      </a>
      <a className="navbar-brand" href="#" style={{color:'white' }}>
          
          /Services aux individus
      </a>

      </nav>
      </div >
      
      <div className="container mt-4">
        <div className="row justify-content-end" >
        <div className="col-md-6">
            
            <br></br> <p><h2><b> Égaliser sans avoir à déplacer.</b> </h2> </p><br></br>
            <p>En réponse aux Hautes Orientations Royales de Sa Majesté le Roi Mohammed VI que Dieu l’Assiste, visant la simplification et la modernisation des procédures administratives pour les citoyens marocains, le Royaume du Maroc a initié, le 27 novembre 2015, un processus visant à faciliter l'égalisation de fichiers en ligne. </p>
            <p>démarche s'inscrit dans l'engagement continu du pays à rendre les services administratifs plus accessibles, permettant aux citoyens de valider leurs documents de manière efficace et pratique.</p>

            </div>
          <div className="col-md-6">
            <div className="border p-4" style={{marginRight:'20px'}}>
            <form>
                  <h2 style={{ color: 'black' }}>Déposer un fichier à égaliser</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre CNI"
                      value={CNI}
                      onChange={(event) => {
                        setCNI(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre Nom"
                      value={nom}
                      onChange={(event) => {
                        setNom(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre Prenom"
                      value={prenom}
                      onChange={(event) => {
                        setPrenom(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="file" style={{ color: 'black' }}>Choisir un fichier :</label>
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                    />
                  </div>
                  <button className="btn custom-btn-primary mt-4"  onClick={save}>
                    Envoyer
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Egalisation;