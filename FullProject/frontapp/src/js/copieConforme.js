import React, { useState } from 'react';
import axios from 'axios';
import '../css/Registration.css'; 


function CopieConforme() {
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

      await axios.post("http://localhost:8088/copie/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert("Fichier envoyé avec succès");

      // Réinitialiser les champs
      setNom("");
      setPrenom("");
      setEmail("");
      setCNI("");
      setSelectedFile(null);
    } catch (err) {
      alert("Échec de l'envoi du fichier");
    }
  };

  return (
    
    <body>
      
       
       
       
        
        
    
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
            
            <br></br> <p><h2><b> Service de la certification des copies conformes.</b> </h2> </p><br></br>
            <p>La certification des copies conformes est l'un des services offerts par la plateforme HFOH, avec une durée de validité de 3 mois.

            Le citoyen inscrit, peut bénéficier de ce service en se déplaçant avec le document original à la commune. </p>
            <p>Aprés l'expiration du document certifié, le citoyen peut le renouveler à distance via la plateforme HFOH sans avoir besoin de se déplacer.</p>

            </div>
          <div className="col-md-6">
            <div className="border p-4" style={{marginRight:'20px'}}>
            <form>
                  <h2 style={{ color: 'black' }}>Déposer une copie à certifiée</h2>
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

export default CopieConforme;