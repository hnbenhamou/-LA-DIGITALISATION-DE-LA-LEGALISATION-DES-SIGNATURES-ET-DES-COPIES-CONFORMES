import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './js/Home';
import CopieConforme from './js/copieConforme'
import Service from './js/Service';
import CitoyenRegistration from './js/CitoyenRegistration';
import DemandeTraite from './js/DemandeTraite';
import CitoyenEgalisation from './js/egalisation';
import Citoyenlogin from './js/login';
import ServiceAdmine from './js/ServiceAdmine';
import ListeDemandeInsc from './js/ListeDemandeInsc';
import ListeDemandeEgal from './js/gestionEgalisation';
import ListeDemandeCopie from './js/GestionCopieConforme';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/service" element={<ServiceContainer />} />
          <Route path="/ServiceAdmine" element={<ServiceAdmineContainer />} />
          <Route path="/inscrire" element={<CitoyenRegistrationContainer />} />
          <Route path="/demandeEgal" element={<CitoyenEgalisation />} />
          <Route path="/login" element={<Citoyenlogin  />} />
          <Route path="/statut" element={<DemandeTraite  />} />
          <Route path="/copie" element={<CopieConforme/>} />
          <Route path="/AdminInsc" element={<ListeDemandeInsc/>} />
          <Route path="/AdminEgal" element={<ListeDemandeEgal/>} />
          <Route path="/copieAdmin" element={<ListeDemandeCopie/>} />
        </Routes>
      </div>
    </Router>
  );
}

function HomeContainer() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

function ServiceContainer() {
  return (
    <div className="App">
      <Service/>
    </div>
  );}
  function ServiceAdmineContainer() {
    return (
      <div className="App">
        <ServiceAdmine/>
      </div>
    );
}

function CitoyenRegistrationContainer() {
  return (
    <div className="App">
      <CitoyenRegistration />
    </div>
  );
}
export default App;



/*function App() {
  return (
    <div className="App">
      <Reclamation/>
    </div>
  );
}
export default App;*/
