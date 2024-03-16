
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar, Container, Card, Table } from 'react-bootstrap';
import TopCard from '../Components/TopCard.tsx';
import '../css/ListeDemandeInsc.css';
import logo from '../photos/logoR.png';



class ListeDemandeEgal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demandeEgal: [],
    };
  }

   fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8088/egalisation/pending', {
        method: 'GET',
      });
  
      if (!response.ok) {
        console.error("Response Status:", response.status);
        // Handle the error based on the response status
        alert("Erreur lors de la récupération des données. Code d'erreur: " + response.status);
      } else {
        // Les données ont été récupérées avec succès, vous pouvez maintenant mettre à jour votre liste
        const data = await response.json();
        this.setState({ demandeEgal: data });
        console.log("Demande Egal:", this.state.demandeEgal);
        
  
        // Autres logiques si nécessaire
      }
    } catch (error) {
      console.error('Erreur de fetch :', error);
      alert("Erreur lors de la récupération des données");
    }

    
  };
  



  // Appelez votre fonction fetchData dans componentDidMount ou à un moment approprié
  componentDidMount() {
    this.fetchData();
  }
  handleRejection = async (id) => {
   try {
      const response = await fetch(`http://localhost:8088/egalisation/delete/${id}`, {
        method: 'Delete',
      });
  
      if (!response.ok) {
        console.error("Response Status:", response.status);
        // Handle the error based on the response status
        alert("Demande supprimé");
      } else {
        // Les données ont été récupérées avec succès, vous pouvez maintenant mettre à jour votre liste
        const data = await response.json();
        this.setState({ demandeEgal: data });
        console.log("Demande Egal:", this.state.demandeEgal);
        
  
        // Autres logiques si nécessaire
      }
    } catch (error) {
      console.error('Erreur de fetch :', error);
      alert("Demante supprimé");
    }
  }

  handleValidation = async (id) => {
    try {
      const response = await fetch(`http://localhost:8088/egalisation/egalise/${id}`, {
        method: 'POST',
      });
  
      if (!response.ok) {
        console.error("Response Status:", response.status);
        // Handle the error based on the response status
        alert("Demande égalisé");
      } else {
        // Les données ont été récupérées avec succès, vous pouvez maintenant mettre à jour votre liste
        const data = await response.json();
        this.setState({ demandeEgal: data });
        console.log("Demande Egal:", this.state.demandeEgal);
        
  
        // Autres logiques si nécessaire
      }
    } catch (error) {
      console.error('Erreur de fetch :', error);
      alert("Demande égalisé");
    }
  }

  render() {
    const { demandeEgal } = this.state;
    const rowCount = demandeEgal.length;
    

    return (
    <body>
      <div className="content">
        {/* Navbar */}
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

        {/* Content */}
        <Container className="mt-4">
          {/* Top Card */}
          
            <TopCard title="Actuellement,  le total des demandes d'égalisation en attente est :" icon="list" text={demandeEgal.length.toString()}  class={`primary small-top-card custom-width`} count={rowCount} />
          
          {/* Small Card */}
          <div className="row">
            <div className="col-xl-12 col-lg-12">
            <div className="card shadow mb-4">
              
            
            <Card.Body>
              <div className="table-responsive portlet">
                <Table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>CNI Citoyen</th>
                      <th>Date demande</th>
                      <th>signature</th>
                      <th>URL</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demandeEgal.map((demandeEgal) => (
                      <tr key={demandeEgal.id_e}>
                        <td>{demandeEgal.citoyen.cni}</td>
                        <td>{demandeEgal.date}</td>
                        <td><a href={`http://localhost:8088/documents/signature/${demandeEgal.citoyen.signature}`} target="_blank" rel="noopener noreferrer">
                        {demandeEgal.citoyen.signature}
                        </a></td>
                        <td><a href={`http://localhost:8088/documents/demande/${demandeEgal.document}`} target="_blank" rel="noopener noreferrer">
                        {demandeEgal.document}
                        </a>
                        </td>
                        
                        
                        <td><button onClick={() => this.handleValidation(demandeEgal.id_e)}>Egaliser</button></td>
                        <td><button onClick={() => this.handleRejection(demandeEgal.id_e)}>Rejeter</button></td>
                      </tr>
                    
                    
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            </div>
            </div>
            </div>
        </Container>
      </div>
      <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-population-theme/css/clay.css?browserId=other&themeId=registrypopulationtheme_WAR_registrypopulationtheme&minifierType=css&languageId=en_US&b=7210&t=1702591938000" id="liferayAUICSS" rel="stylesheet" type="text/css" />
        <link data-senna-track="temporary" href="/o/frontend-css-web/main.css?browserId=other&themeId=registrypopulationtheme_WAR_registrypopulationtheme&minifierType=css&languageId=en_US&b=7210&t=1702591885447" id="liferayPortalCSS" rel="stylesheet" type="text/css" />
        
        <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-population-theme/css/main.css?browserId=other&themeId=registrypopulationtheme_WAR_registrypopulationtheme&minifierType=css&languageId=en_US&b=7210&t=1702591938000" id="liferayThemeCSS" rel="stylesheet" type="text/css" />
        <style data-senna-track="temporary" type="text/css" dangerouslySetInnerHTML={{__html: "\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\t\t\n\n\t\t\t\t\t\n\n#p_p_id_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_ .portlet-content {\n\n}\n\n\n\n\n\t\t\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t" }} />
        <link href="https://www.rnp.ma/o/registry-population-theme/css/lpg-plugins.css" rel="stylesheet" />
        <link href="https://www.rnp.ma/o/registry-population-theme/css/lpg-custom.css" rel="stylesheet" />
      </body>
    );
  }
}

export default ListeDemandeEgal;

