import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../photos/logoR.png'
class ServiceAdmine extends Component {
  componentDidMount() {
    // Call protectPage() when the protected page loads
    this.protectPage();
  }
  
  handleLogout = () => {

    
    // Perform any logout-related tasks, such as clearing user data from local storage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('CNI');

    // Redirect to the login page or perform any other navigation logic
    window.location.href = '/login'; // Replace with your actual login page URL
  };
  protectPage() {
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn !== 'true') {
      // Redirect to the login page
      window.location.href = '/login'; // Replace 'login.html' with your actual login page URL
    }
  }
  
  render(){
      return (
        <div>
          <div className="pt-0" id="wrapper">
            <div className="header pos-relative">
              <div className="headermain">
                {/*  logo  */}
                <div className="float-left logorespwrp d-none d-lg-block" style={{ marginRight: '200px' }}>
                  <a className="display-inline-block logo-adjust logo default-logo" title>
                    <img src={logo} className="dblock logoresp" style={{ width: '80px', height: 'auto' }}/>
                  </a>
                </div>
                {/* MEGAMENU TOP BAR */}
                <div className="pos-relative header-custom-new navbar navbar-classic navbar-expand-lg navbar-light d-none d-lg-flex">
                  <img src="https://www.rnp.ma/o/registry-services-theme/images/ornement-green.svg" className="header-ornement" />
                  {/* MEGAMENU */}
                  <div className="right-side-section">
                    {/* responsiveness : burger menu btn : display none for non-mobile media (min-width: 768px) */}	
                  
                    {/* responsiveness : menu dropdown */}
                    <div aria-expanded="false" className="collapse navbar-collapse rnp-mega-menu rnp-md-float-right" id="navigationCollapse">
                      {/* MEGAMENU */}
                      
                      <input type="hidden" id="hoveredNavigationMenu" defaultValue />
                    </div>
                    {/* search */}
                    <div role="search" style={{width: '28%'}} className="search-custom d-none d-sm-block rnp-md-float-left">
                      <div className="portlet-boundary portlet-boundary_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_  portlet-static portlet-static-end decorate portlet-search-bar " id="p_p_id_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_">
                        
                        <section className="portlet" id="portlet_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch">
                          <div className="portlet-content">
                            <div className="autofit-float autofit-row portlet-header">
                            <div>
                              <Link to="/logout" className="logout-link" style={{fontSize: '20px',
                                    color: 'green',marginLeft:'-100px'}} onClick={this.handleLogout}>
                                  Logout <i className="fas fa-arrow-right"></i>
                                </Link>
                                </div>
                              
                            </div>
                            <div className=" portlet-content-container">
                              <div className="portlet-body">
                                
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    {/* arabic/french toggler button */}
                    <div className="header-btn d-none d-sm-block">
                      <a id="changeLangAr" href="/c/portal/update_language?p_l_id=17&redirect=/web/rnp_pub/services&languageId=ar_SA">عربية</a>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            {/* MEGAMENU DROPDOWN PLACEHOLDER */}
            <div className="container-fluid" style={{position: 'absolute', display: 'none'}} id="rnpSubMenuDisplay">
              <div className="dev-and-trade-2-1-layout ltc-layout-template-homepage" role="main">
                <div className="portlet-layout row banner-column" id="rnpSubMenuDisplayLayout" />
              </div>
            </div>
            <main className="pageHome">
              {/* Section banner Start */}
              <section className="sectionbanner">
                <div className="container largeContainer">
                  <div className="svcindividutitle"><strong>Services</strong> aux individus</div>
                </div>
                <img src="https://www.rnp.ma/o/registry-services-theme/images/ornement-white.png" className="banner-img" />
              </section>
              {/* Section banner End */}
              {/* Section companies start */}
              <section className="rnpsection">
                <div className="container largeContainer">
                  <div className="row mrgbtm" style={{marginBottom: '50px'}}>
                    <div className="col-md-6">
                      <div className="boxes">
                        <div className="boxeswrap">
                          <div className="icon">
                            <i className="fas fa-fingerprint" />
                          </div>
                          <div className="icontext">
                            <h5>Service Gestion des demandes d'inscription</h5>
                            <p>Vous pouvez rejeter ou valider une demande .</p>
                            <Link to="/AdminInsc"> Un petit clic ici </Link>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="boxes">
                        <div className="boxeswrap">
                          <div className="icon">
                            <i className="fas fa-map-marker-alt" />
                          </div>
                          <div className="icontext">
                            <h5>Service de gestion des demandes d'égalisation</h5>
                            <p>Vous pouvez faire une vérification puis une égalisation.</p>
                          </div>
                        </div>
                        <Link to="/AdminEgal"> Un petit clic ici </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="boxes">
                        <div className="boxeswrap">
                          <div className="icon">
                            <i className="fas fa-globe" />
                          </div>
                          <div className="icontext">
                            <h5>Visualisez les statistiques disponibles sur ce site</h5>
                            <p>Une exploration exhaustive et minutieuse des données. </p>
                            <Link to="/dashbordAdmin"> Un petit clic ici </Link>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="boxes">
                        <div className="boxeswrap">
                          <div className="icon">
                            <i className="fas fa-user-tie" />
                          </div>
                          <div className="icontext">
                            <h5>Service de gestion des copies conforme</h5>
                            <p> La certification des copies conformes est l'un des services offerts par notre plateforme</p>
                            <Link to="/copieAdmin"> Un petit clic ici </Link>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
               
              </section>
              {/* Section companies end */}
            </main>
            <footer className="footer">
              {/* the footer columns */}
              <div className="container largeContainer">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h5>Registre National de la Population</h5>
                    <ul className="list-unstyled links">
                      <li><a href="">Accueil</a></li>
                      <li><a href="">A propos</a></li>
                      <li><a href="">Questions fréquentes</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h5>Services</h5>
                    <ul className="list-unstyled links">
                      <li><a href="" target="_blank">Remplir la demande d'inscription</a></li>
                      <li><a href="">Recherche d’un Centre d’inscription</a></li>
                      <li><a href="">Tous les services en ligne</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h5>Informations légales</h5>
                    <ul className="list-unstyled links">
                      <li><a href="">Mentions légales</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* tel & newsletter */}
              {/* bottom footer */}
              <div className="btmfooter">
                <div className="container largeContainer">
                  <nav className="navbarWrapper d-flex flex-wrap  flex-md-row align-items-center">
                    <div className="logoWraper col-xl-5 mb-3 mb-md-0 col-md-3">

                    </div>
                    <div className="navWrapper  col-xl-7 col-md-9">
                      
                    </div>
                  </nav>
                </div>
              </div>
            </footer>
          </div>
          <p className="footer-version">v0.21.2.27.1.93</p>
          <link data-senna-track="permanent" href="/o/frontend-theme-font-awesome-web/css/main.css" rel="stylesheet" type="text/css" />        
          <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-services-theme/css/clay.css?browserId=other&themeId=registryservicestheme_WAR_registryservicestheme&minifierType=css&languageId=en_US&b=7210&t=1702591926000" id="liferayAUICSS" rel="stylesheet" type="text/css" />          
          <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-services-theme/css/main.css?browserId=other&themeId=registryservicestheme_WAR_registryservicestheme&minifierType=css&languageId=en_US&b=7210&t=1702591926000" id="liferayThemeCSS" rel="stylesheet" type="text/css" />
          <link href="https://www.rnp.ma/o/registry-services-theme/css/lpg-custom-service.css" rel="stylesheet" />
          <link href="https://www.rnp.ma/o/registry-services-theme/css/styles-service.css" rel="stylesheet" />
        
        </div>
      );
    }
  };
export default ServiceAdmine;