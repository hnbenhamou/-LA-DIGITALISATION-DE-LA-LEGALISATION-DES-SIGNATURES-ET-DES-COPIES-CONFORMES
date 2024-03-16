import React from 'react';
import axios from 'axios';
import { useState } from "react";
import logo from '../photos/logoR.png';
import '../css/Registration.css'; 
import '../css/exemple.css'

function CitoyenRegistation() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_nais, setDate_nais] = useState("");
  const [adresse, setAdresse] = useState("");
  const [num_tel, setNum_tel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [CNI, setCNI] = useState("");
  const [Image, setImage] = useState(null);

  async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', nom);
      formData.append('prenom', prenom);
      formData.append('date_nais', date_nais);
      formData.append('adresse', adresse);
      formData.append('num_tel', num_tel);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('status', status);
      formData.append('CNI', CNI);
      formData.append('file', Image);

      const response = await fetch('http://localhost:8088/citoyen/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Inscription réussie');
        // Reset form fields after successful registration
        setNom('');
        setPrenom('');
        setDate_nais('');
        setAdresse('');
        setNum_tel('');
        setEmail('');
        setPassword('');
        setStatus('');
        setCNI('');
        setImage(null);
      } else {
        alert("Échec de l'inscription");
      }
    } catch (err) {
      console.error('Registration failed:', err);
      alert("Échec");
    }
  }

  return (
    <body>
    <div class="imagedefond">
      {/* Barre de navigation */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
        <a className="navbar-brand" href="#">
          
          <img src={logo} alt="Votre Image" height="80" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ml-auto">
  <li className="nav-item active">
      <a className="nav-link" href="#">
        <span className="font-weight-bold"><b>A PROPOS</b></span> <span className="sr-only"></span>
      </a>
    </li>
    <li className="nav-item active">
      <a className="nav-link" href="#">
        <span className="font-weight-bold"><b>SERVICES</b></span> <span className="sr-only"></span>
      </a>
    </li>
    <li className="nav-item active">
      <a className="nav-link" href="#">
        <span className="font-weight-bold"><b>PROCEDURE</b></span> <span className="sr-only"></span>
      </a>
    </li>
    <li className="nav-item active">
      <a className="nav-link" href="#">
        <span className="font-weight-bold"><b>QUESTIONS FREQUENTES</b></span> <span className="sr-only"></span>
      </a>
    </li>
  </ul>
  <form id="recherche" className="form-inline my-2 my-lg-0">
    <div className="input-group">
      <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
      </div>
    </div>
  </form>
</div>

      </nav>

      
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            
          <br></br> <p><h2><b>Avantages de l’inscription 100% en ligne.</b> </h2> </p><br></br>
          <p>L’inscription en ligne est simple et offre plusieurs avantages. </p>
          <p>*Inscription sans déplacement et sans présenter de justificatifs</p>
          <p>*Un espace en ligne dédié au ménage</p>
          <p>*Une multitude de services en ligne</p>
          <p>Pour démarrer votre préinscription, veuillez saisir vos informations afin de recevoir le code à saisir et ne rater aucune information sur les étapes de votre inscription.</p>





          </div>
          <div className="col-md-6">
            <div className="border p-4">
              <form action="/api/citizens" method="post" enctype="multipart/form-data">
              <h2>Étapes rapides et faciles</h2>

                <div className="form-group">
                  
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre Nom"
                    value={nom}
                    onChange={(event) => { setNom(event.target.value); }}
                  />
                </div>

                <div className="form-group">
                  
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre Prenom"
                    value={prenom}
                    onChange={(event) => { setPrenom(event.target.value); }}
                  />
                </div>

                          
                  <div class="form-group">
                      
                      <input type="text" class="form-control" placeholder="Votre date de naissance AAAA-M-J"
                      value={date_nais}
                      onChange={(event) =>
                        {
                          setDate_nais(event.target.value);      
                        }}
                    />
                  </div>
                  <div class="form-group">
                      
                      <input type="text" class="form-control" placeholder="Votre Adresse"
                      value={adresse}
                      onChange={(event) =>
                        {
                          setAdresse(event.target.value);      
                        }}
                    />
                  </div>
                  <div class="form-group">
                      
                      <input type="Number" class="form-control" placeholder="Votre Numero"
                      value={num_tel}
                      onChange={(event) =>
                        {
                          setNum_tel(event.target.value);      
                        }}
                    />
                  </div>

                  <div class="form-group">
                      
                      <input type="email" class="form-control" placeholder="Votre email"
                      value={email}
                      onChange={(event) =>
                        {
                          setEmail(event.target.value);      
                        }}
                    />
                  </div>

                  <div class="form-group">
                      
                      <input type="text" class="form-control" placeholder="Votre Status"
                      value={status}
                      onChange={(event) =>
                        {
                          setStatus(event.target.value);      
                        }}
                    />
                  </div>

                  <div class="form-group">
                      
                      <input type="text" class="form-control" placeholder="Votre CNI"
                      value={CNI}
                      onChange={(event) =>
                        {
                          setCNI(event.target.value);      
                        }}
                    />
                  </div>

                  <div class="form-group">
                      
                      <input type="text" class="form-control" placeholder="Saisir votre mot de passe"
                      value={password}
                      onChange={(event) =>
                        {
                          setPassword(event.target.value);      
                        }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image" >Déposer une image de votre signature :</label>
                    <input
                      type="file"
                      id="image"
                      onChange={(event) => setImage(event.target.files[0])}
                    />
                  </div>

               

                <button className="btn custom-btn-primary mt-4" onClick={save}>
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
       
        <style data-senna-track="temporary" type="text/css" dangerouslySetInnerHTML={{__html: "\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\t\t\n\n\t\t\t\t\t\n\n#p_p_id_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_ .portlet-content {\n\n}\n\n\n\n\n\t\t\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t" }} />
        
    </div>
    </body>
  );
}

export default CitoyenRegistation;