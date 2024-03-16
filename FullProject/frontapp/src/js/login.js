import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../photos/logoR.png';
import '../css/loginService.css'




function Login() {
  const [cni, setCni] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const handleEmailChange = (event) => {
    setCni(event.target.value); // Fix state variable name
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      // Perform the authentication logic on the backend
      const response = await fetch(`http://localhost:8088/citoyen/${cni}/${password}`, {
        method: 'POST'
     
      });

      if (response.ok) {
        
        const data = await response.json();
        const { role, CNI } = data;
        localStorage.setItem('loggedIn','true');
        localStorage.setItem('CNI',CNI);
        console.log(role);
        // Redirect based on the user's role
        if (role === 'citoyen') {
          navigate('/Service'); // Use navigate function to redirect
        } else if (role === 'admin') {
          navigate('/ServiceAdmine'); // Use navigate function to redirect
        }
      } else {
        // Authentication failed
        // Handle authentication failure, show error message, etc.
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle other errors, show error message, etc.
    }
  };

      return (
        
    <div className="login-page-container">
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
      <h2><b>Authentification</b></h2>
       Bienvenue sur le service en ligne des arrondicement Maroccain
     Le compte du ménage vous donne accès à tous les services offerts par le RSU, notamment l'inscription de votre ménage, la mise à jour des données de votre ménage, et bien d'autres services en ligne, sans devoir vous déplacer au centre de services aux citoyens
      {/* partial:index.partial.html */} 
      
      <section> 
        <div className="signin"> 
          <div className="content"> 
            <h3>Se connecter</h3> 
            <div className="form"> 
              <div className="inputBox"> 
              <input type="email" value={cni} onChange={handleEmailChange} required /> <i>CNI</i> 
              </div> 
              <div className="inputBox"> 
              <input type="password" value={password} onChange={handlePasswordChange} required /> <i>Mot de passe</i> 
              </div> 
              <div className="links"> <a href="#">mot de passe oublié?</a> <a id="links"href="#">S'inscrire</a> 
              </div> 
              <div className="inputBox"> 
                 <input type="submit" value="Login" onClick={handleLogin} />
              </div> 
            </div> 
          </div> 
        </div> 
      </section>
      
      <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-population-theme/css/clay.css?browserId=other&themeId=registrypopulationtheme_WAR_registrypopulationtheme&minifierType=css&languageId=en_US&b=7210&t=1702591938000" id="liferayAUICSS" rel="stylesheet" type="text/css" />
        <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-population-theme/css/main.css?browserId=other&themeId=registrypopulationtheme_WAR_registrypopulationtheme&minifierType=css&languageId=en_US&b=7210&t=1702591938000" id="liferayThemeCSS" rel="stylesheet" type="text/css" />
        <style data-senna-track="temporary" type="text/css" dangerouslySetInnerHTML={{__html: "\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\t\t\n\n\t\t\t\t\t\n\n#p_p_id_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_ .portlet-content {\n\n}\n\n\n\n\n\t\t\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t" }} />
        <link href="https://www.rnp.ma/o/registry-population-theme/css/lpg-plugins.css" rel="stylesheet" />
        <link href="https://www.rnp.ma/o/registry-population-theme/css/lpg-custom.css" rel="stylesheet" />
            
    
    </div>
  );
    
};

export default Login;