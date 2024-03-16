
import React, { Component } from 'react';
import demandeInscService from './demandeInscService';
import { Navbar, Container, Card, Table } from 'react-bootstrap';
import TopCard from '../Components/TopCard.tsx';
import '../css/ListeDemandeInsc.css';
import logo from '../photos/logoR.png';


import axios from 'axios';
class ListeDemandeInsc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demandeInsc: [],
    };
  }

  componentDidMount() {
    demandeInscService.getDemande().then((res) => {
      this.setState({ demandeInsc: res.data });
    });
  }
  handleRejection = async (id) => {
    try {
      // Envoi de la requête DELETE pour rejeter la demande avec le CNI
      await axios.put(`http://localhost:8088/citoyen/${id}/reject`);
      // Mettez à jour l'état local ou rechargez la liste des demandes après le rejet
      window.location.reload();
        } catch (error) {
      console.error("Erreur lors du rejet de la demande :", error);
    }
  }

  handleValidation = async (id) => {
    try {
      // Envoi de la requête PUT pour valider la demande avec le CNI
      await fetch(`http://localhost:8088/citoyen/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });
  
      // Mettez à jour l'état local ou rechargez la liste des demandes après la validation
      demandeInscService.getDemande().then((res) => {
        this.setState({ demandeInsc: res.data });
      });
  
      // Refresh the page after updating the state
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la validation de la demande :", error);
    }
  }

  render() {
    const { demandeInsc } = this.state;
    const rowCount = demandeInsc.length;

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
          
            <TopCard title="Actuellement,  le total des demandes d'inscription en attente est :" icon="list" text={demandeInsc.length.toString()}  class={`primary small-top-card custom-width`} count={rowCount} />
          
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
                      <th>Adresse citoyen</th>
                      <th>Autoriser</th>
                      <th>Rejeter</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demandeInsc.map((demandeInsc) => (
                      <tr key={demandeInsc.id}>
                        <td>{demandeInsc.cni}</td>
                        <td>{demandeInsc.adr}</td>
                        <td>{demandeInsc.activated ? "Approuvé" : "Non approuvé"}</td>
                        <td>{demandeInsc.rejected ? "Rejeté" : "Non rejeté"}</td>
                        <td><button onClick={() => this.handleValidation(demandeInsc.id)}>Valider</button>
                            <button onClick={() => this.handleRejection(demandeInsc.id)}>Rejeter</button></td>
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

export default ListeDemandeInsc;

