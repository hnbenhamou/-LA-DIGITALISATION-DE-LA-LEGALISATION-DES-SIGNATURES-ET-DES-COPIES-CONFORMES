import React, { Component } from 'react';
import logo_yelow from '../photos/logo_yelow.png';
import message from '../photos/message.png';
import map from '../photos/map.png';
import question from '../photos/question.png';
import services from '../photos/services-m.jpg'
import logo from '../photos/logoR.png'
import { Link } from 'react-router-dom';
class Home extends Component {
  render(){
    return (
      <div>
        <div className="se-pre-con" style={{display: 'none'}} />
        <div className="body-ornement-bg" style={{top: '50px'}} />
        <nav aria-label="Quick Links" className="quick-access-nav" id="wavt_quickAccessNav">
          <h1 className="hide-accessible">Navigation</h1>
          <ul>
            <li><a href="#main-content">Skip to Content</a></li>
          </ul>
        </nav>
        <div className="pt-0" id="wrapper">
          <div className="header pos-relative">
            <div className="headermain">
              {/*logo*/}
              <div className="float-left logorespwrp d-none d-lg-block" style={{ marginRight: '200px' }}>
                  <a className="display-inline-block logo-adjust logo default-logo" title>
                    <img src={logo} className="dblock logoresp" style={{ width: '80px', height: 'auto' }}/>
                  </a>
                </div>
              {/* MEGAMENU TOP BAR */}
              <div className="pos-relative header-custom-new navbar navbar-classic navbar-expand-lg navbar-light d-none d-lg-flex">
                <img src="https://www.rnp.ma/o/registry-population-theme/images/ornement-green.svg" className="header-ornement" />
                <a href="#" className="btn btn-link rnp-btn-link hide" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</a>
                {/* MEGAMENU */}
                <div className="right-side-section">
                  {/* responsiveness : burger menu btn : display none for non-mobile media (min-width: 768px) */}	
                  <button aria-controls="navigationCollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right" data-target="#navigationCollapse" data-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* responsiveness : menu dropdown */}
                  <div aria-expanded="false" className="collapse navbar-collapse rnp-mega-menu rnp-md-float-right" id="navigationCollapse">
                    {/* MEGAMENU */}
                    <div id="navbar_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet">
                      <ul aria-label="Site Pages" className="nav navbar-blank navbar-nav navbar-site rnp-mega-menu-ul" role="menubar">
                        {/* put angle-down icon on item with children */}
                        <li className="lfr-nav-item nav-item" id="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_14" role="presentation" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_14_submenu">
                          <a aria-labelledby="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet}_14" className="nav-link text-truncate" href="" role="menuitem">
                            <span className="text-truncate" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_14_submenu">
                              A PROPOS 
                            </span>
                          </a>
                        </li>
                        {/* put angle-down icon on item with children */}
                        <li className="lfr-nav-item nav-item rnp-nav-dropdown" id="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_15" role="presentation" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_15_submenu">
                          <Link to="/login" aria-labelledby="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet}_15" aria-haspopup="true" className="nav-link text-truncate " href="" role="menuitem">
                            <span className="text-truncate" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_15_submenu">
                              SERVICES 						<span className="lfr-nav-child-toggle"><svg className="lexicon-icon lexicon-icon-angle-down" focusable="false" id="ukau" role="presentation"><use xlinkHref="" /></svg></span>
                            </span>
                          </Link>
                          
                          <div className="d-block d-lg-none" id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_15_submenu">
                            <div className="col-md-12 row ">
                              
                              <div className="col-lg-6">
                                <div className="right-side-menus">
                                  <div className="rnp-sub-menu-section">
                                    
                                    <div className="rnp-sub-menu-thitd-level-menu-section">
                                
                                    </div>
                                  </div>
                                </div>
                              </div>	
                            </div>
                          </div>
                        </li>
                        {/* put angle-down icon on item with children */}
                        <li className="lfr-nav-item nav-item" id="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_16" role="presentation" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_16_submenu">
                          <a aria-labelledby="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet}_16" className="nav-link text-truncate" href="" role="menuitem">
                            <span className="text-truncate" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_16_submenu">
                              PROCÉDURE 
                            </span>
                          </a>
                        </li>
                        {/* put angle-down icon on item with children */}
                        <li className="lfr-nav-item nav-item" id="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_17" role="presentation" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_17_submenu">
                          <a aria-labelledby="layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet}_17" className="nav-link text-truncate" href="" role="menuitem">
                            <span className="text-truncate" data-submenu-id="rnp_layout_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_17_submenu">
                              QUESTIONS FRÉQUENTES 
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <input type="hidden" id="hoveredNavigationMenu" defaultValue />
                  </div>
                  {/* search */}
                  <div role="search" style={{width: '28%'}} className="search-custom d-none d-sm-block rnp-md-float-left">
                    <div className="portlet-boundary portlet-boundary_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_  portlet-static portlet-static-end decorate portlet-search-bar " id="p_p_id_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_">
                      <span id="p_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch" />
                      <section className="portlet" id="portlet_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch">
                        <div className="portlet-content p-0">
                          <div className="autofit-float autofit-row portlet-header m-0">
                            <div className="autofit-col autofit-col-expand">
                              <h2 className="portlet-title-text">Search Bar</h2>
                            </div>
                            <div className="autofit-col autofit-col-end">
                              <div className="autofit-section">
                              </div>
                            </div>
                          </div>
                          <div className=" portlet-content-container">
                            <div className="portlet-body">
                              <form action="https://www.rnp.ma/web/rnp_pub/search" className="form  " data-fm-namespace="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_" id="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_fm" method="get" name="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_fm">
                                <input className="field form-control" id="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_formDate" name="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_formDate" type="hidden" defaultValue={1702807604395} />
                                <div className="search-bar">
                                  <input className="field search-bar-empty-search-input form-control" id="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_emptySearchEnabled" name="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_emptySearchEnabled" type="hidden" defaultValue="false" />
                                  <div className="input-group search-bar-simple">
                                    <div className="input-group-item search-bar-keywords-input-wrapper">
                                      <input className="form-control input-group-inset input-group-inset-after search-bar-keywords-input" data-qa-id="searchInput" id="dkrk___q" name="q" placeholder="Search..." title="Search" type="text" defaultValue />
                                      <input className="field form-control" id="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_scope" name="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_scope" type="hidden" defaultValue />
                                      <div className="input-group-inset-item input-group-inset-item-after">
                                        <button className="btn" aria-label="Submit" id="vcft" type="submit"><svg className="lexicon-icon lexicon-icon-search" focusable="false" role="presentation"><use xlinkHref="https://www.rnp.ma/o/registry-population-theme/images/clay/icons.svg#search" /></svg></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  {/* arabic/french toggler button */}
                  <div className="header-btn d-none d-sm-block">
                    <a id="changeLangAr" href="/c/portal/update_language?p_l_id=27&redirect=/&languageId=ar_SA">عربية</a>
                  </div>
                </div>
              </div>
              {/* RESPSONSIVE MEGAMENU TOP BAR */}
             
            </div>
          </div>
          
          <section className="sectionbanner">
            <div className="largeContainerBanner">
              <div className="slidertop">
                <div className="d-flex flex-wrap align-items-center slidewrap w-100">
                  <div className="col-lg-7 quotewrap">
                    <p className="subsectionttl-awlrs"><strong>La DIgitalisation <br /> Egalisation et Copie Conforme</strong></p>
                    <p className="sectionttl-awlrs">Premier pas pour un accès simple, sûr et inclusif aux programmes d'appui social étatiques.
                    </p><p className="rnpslidetext-awlrs">Inscription gratuite et ouverte à tous les citoyens marocains et les étrangers résidants au Maroc de tout âge.</p>
                    <Link id="redirect_prereg_fra" className="btn btn-primary custom-btn-gocheck-awlrs-start" to="/inscrire" target="_blank" role="button">Remplir la demande d’inscription</Link>
                    <Link to="login" className="btn btn-primary custom-btn-gocheck-awlrs-track"  role="button">Se connecter à votre compte Arrondissement</Link>
                  </div>
                  <div className="col-lg-5">
                    {/*<div class="slideimg">
                                        <img src="https://www.rnp.ma/o/registry-population-theme/images/cta_illustration.svg">
                                    </div>*/}
                    <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                        <img src={services}   allowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',marginLeft: '10px'}} title="Registre national de la population" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About RNP */}
          <section className="rnpsection">
            <div className="container largeContainer">
              <div className="row justify-content-lg-between">
                <div className="col"><h2 className="sectionttl awlrs">Comment obtenir l'identifiant ?</h2></div>
                <div className="col d-none d-md-block"><h2 className="sectionttl awlrs">A préparer pour l'inscription</h2></div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-12 howcol">
                  <p className="textsubsectionttl">Trois étapes pour s'inscrire au Registre National de la Population et obtenir son Identifiant Digital Civil et Social&nbsp;: </p>
                  {/* steps items */}
                  <div className="rp-carousel-top-section-awlrs row col-md-12">
                    <div className="rp-carousel-image-awlrs col-md-2 col-xs-2"><img src={question} style={{ marginLeft: '10px' }} /></div>
                    <div className="rp-carousel-description col-md-10 col-xs-10">
                      <p className="rp-carousel-item-header-awlrs">Remplir la demande d'inscription en ligne</p>
                      <div className="rp-carousel-description-rp-carousel-desc-awlrs">Commencer la procédure en ligne pour gagner du temps. Cette étape est facultative mais recommandée.</div>
                    </div>
                  </div>
                  <div className="rp-carousel-top-section-awlrs row col-md-12">
                    <div className="rp-carousel-image-awlrs col-md-2 col-xs-2"><img src={map} style={{ marginLeft: '10px' }}/></div>
                    <div className="rp-carousel-description col-md-10 col-xs-10">
                      <p className="rp-carousel-item-header-awlrs">Se rendre au Centre de Service au Citoyen de l'adresse de résidence</p>
                      <div className="rp-carousel-description-rp-carousel-desc-awlrs">Rendez-vous au centre d'inscription auquel le citoyen est rattaché administrativement pour finaliser l'inscription.</div>
                    </div>
                  </div>
                  <div className="rp-carousel-top-section-awlrs row col-md-12">
                    <div className="rp-carousel-image-awlrs col-md-2 col-xs-2"><img src={message} style={{ marginLeft: '10px' }}/></div>
                    <div className="rp-carousel-description col-md-10 col-xs-10">
                      <p className="rp-carousel-item-header-awlrs">Recevoir l'identifiant</p>
                      <div className="rp-carousel-description-rp-carousel-desc-awlrs">Après l'inscription, la demande peut être suivie sur ce portail. L'identifiant sera communiqué au sms, e-mail ou à l'adresse postale communiqués.</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="col pr-0 pl-0 d-md-none col-xs-12"><h2 className="sectionttl awlrs">A préparer pour l'inscription</h2></div>
                  <p className="textsubsectionttl" style={{marginBottom: '6.5%'}}>Pour faciliter les procédures d’inscription au centre de services aux citoyens</p>
                  {/* checkbox items */}
                  <div className="rp-carousel-top-section-awlrs row col-md-12">
                    <div className="rp-carousel-image-awlrs col-md-1 col-xs-1"><img src={logo_yelow} style={{ marginLeft: '20px' }}/></div>
                    <div className="rp-carousel-description col-md-11 col-xs-11">
                      <p className="rp-carousel-item-header-awlrs">S'assurer de la présence de tous les membres concernés par l'inscription</p>
                      <div className="rp-carousel-description-rp-carousel-desc-awlrs">Tous les membres concernés par l'inscription doivent se présenter physiquement au centre de services</div>
                    </div>
                  </div>
                  <div className="rp-carousel-top-section-awlrs row col-md-12">
                    <div className="rp-carousel-image-awlrs col-md-1 col-xs-1"><img src={logo_yelow} style={{ marginLeft: '20px' }} /></div>
                    <div className="rp-carousel-description col-md-11 col-xs-11">
                      <p className="rp-carousel-item-header-awlrs">Préparer les pièces justificatives nécessaires pour l'inscription</p>
                      <div className="rp-carousel-description-rp-carousel-desc-awlrs">Se munir de l'original de l'ensemble des <a data-target=".bd-example-modal-lg" data-toggle="modal" href="#">pièces justificatives</a> nécessaires pour l'inscription</div>
                    </div>
                  </div>
                  <div className="rp-carousel-top-section-awlrs row col-md-12">
                    <div className="rp-carousel-image-awlrs col-md-1 col-xs-1"><img src={logo_yelow} style={{ marginLeft: '20px' }} /></div>
                    <div className="rp-carousel-description col-md-11 col-xs-11">
                      <p className="rp-carousel-item-header-awlrs">Préparer la confirmation de préinscription</p>
                      <div className="rp-carousel-description-rp-carousel-desc-awlrs">Se munir du formulaire de préinsciption en format numérique sur smartphone ou imprimé, pour chaque membre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Parcours Services */}
          <section className="parcoussection">
            <div className="container largeContainer">
              <div className="row justify-content-lg-between">
                <div className="col">
                  <h2 className="sectionttl awlrs">Services en Ligne</h2>
                </div>
                <div className="col">
                  <a className="custom-btn d-flex gocheck d-none d-md-block" href="">
                    Tous les services
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="biground"><a href=""><div className="roundimgauth" /></a></div>
                  <h3 className="featurettl-awlrs"><a href="">Vérification du statut d'inscription</a></h3>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="biground"><a href=""><div className="roundimgassist" /></a></div>
                  <h3 className="featurettl-awlrs"><a href="">Téléchargement de l’IDCS </a></h3>
                </div>  
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="biground"><a href=""><div className="roundimgidcs" /></a></div>
                  <h3 className="featurettl-awlrs"><a href="">Recherche d’un Centre d’inscription</a></h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="biground"><a href=""><div className="roundimgverif" /></a></div>
                  <h3 className="featurettl-awlrs"><a href="">Vérification des données de contact (N° mobile / Email)</a></h3>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="biground"><a href=""><div className="roundimgmaj" /></a></div>
                  <h3 className="featurettl-awlrs"><a href="">Mise à jour de l’adresse de résidence</a></h3>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="biground"><a href="" target="_blank"><div className="roundimglost" /></a></div>
                  <h3 className="featurettl-awlrs"><a href="" target="_blank">Récupération de l'Identifiant Digital Civil et Social</a></h3>
                </div>
              </div>
              <hr />
              <div className="row align-items-center" style={{marginTop: '45px'}}>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <div className="banner-sup-awlers">Besoin d'aide? <br /> Contactez notre service de support maintenant.</div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 float-right">
                  <a className="custom-btn-gocheck-awlrs-start rlmhp" href="">Contacter le support</a>
                </div>
              </div>
            </div>
          </section>
          {/* Stat Section */}
          <section className="chartsection">
            <div className="container largeContainer">
              <div className="row justify-content-lg-between">
                <div className="col">
                  <h2 className="sectionttl">Questions fréquentes</h2>
                </div>
                <div className="col">
                  <a className="custom-btn d-flex gocheck d-none d-md-block" href="">
                    Accéder à la foire aux questions
                  </a>
                </div>
              </div>
              {/* import faq from faq webcontent */}
              <div className="journal-content-article " data-analytics-asset-id="RNP_FAQS_LIMITED" data-analytics-asset-title="RNP_FAQS_LIMITED" data-analytics-asset-type="web-content">
                <div className="rnp-faqs-wrap-template">
                  <div className="horizontal faq-section row align-items-stretch">
                    {/* collaposable panels */}
                    <div className="questions-main-section">
                      <div className="panel-group show" id="accordion1" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default" id="inscription">
                          <div className="panel-heading" role="tab" id="heading11">
                            <h4 className="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                <i className="more-less fa fa-plus" />
                                Pourquoi s’inscrire au service en ligne ?
                              </a>
                            </h4>
                          </div>
                          
                        </div>
                        <div className="panel panel-default" id="csc">
                          <div className="panel-heading" role="tab" id="heading12">
                            <h4 className="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapse12" aria-expanded="true" aria-controls="collapse12">
                                <i className="more-less fa fa-plus" />
                                Qu’est-ce que le CSC ?
                              </a>
                            </h4>
                          </div>
                         
                        </div>
                        <div className="panel panel-default" id="idcs">
                          <div className="panel-heading" role="tab" id="heading13">
                            <h4 className="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapse13" aria-expanded="true" aria-controls="collapse13">
                                <i className="more-less fa fa-plus" />
                                Qu’est-ce que l’IDCS ?
                              </a>
                            </h4>
                          </div>
                          
                        </div>
                        <div className="panel panel-default" id="auth">
                          <div className="panel-heading" role="tab" id="heading14">
                            <h4 className="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapse14" aria-expanded="true" aria-controls="collapse14">
                                <i className="more-less fa fa-plus" />
                                Qu’est-ce que l’authentification ?
                              </a>
                            </h4>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n @keyframes fadeIn {\n  0% {opacity:1;}\n  100% {opacity:0.6;}\n}\n@keyframes fadeOut {\n  0% {opacity:0.6;}\n  100% {opacity:1;}\n}\n.rnp-faqs-wrap-template .faq-section .faq-box:hover {\n    cursor:pointer;\n}\n.rnp-faqs-wrap-template .faq-section .faq-box.in-active .horizontal-inner:hover {\n    \n    animation: fadeOut linear 1s;\n    opacity:1;\n    background-image: -webkit-gradient( linear, left top, left bottom, color-stop(0, #ffffff), color-stop(1, #ffffff));\n}\n\n.rnp-faqs-wrap-template .faq-section .in-active .horizontal-inner {\n     \n     animation: fadeIn linear 1s;\n     opacity:0.6;\n     background-image: -webkit-gradient( linear, left top, left bottom, color-stop(0, #ffffff), color-stop(1, #ffffff));\n \n }\n .rnp-faqs-wrap-template {\n    margin-left: 3.5%;\n    margin-right: 4.3%;\n}\n .rnp-faqs-wrap-template .faq-section .horizontal-inner {\n    margin-left: 15%;\n    background-color: #ffffff;\n}\n .rnp-faqs-wrap-template .faq-section .horizontal-inner .box-wrap {\n    height: 175px;\n    width: 225px;\n    padding: 5%;\n    display: grid;\n}\n.rnp-faqs-wrap-template .faq-section .box-wrap i {\n    margin-top: 10%;\n    font-size: 4rem;\n    margin-left: 25%;\n}\n.img-center {\n    margin-left: 19% !important;\n    text-align:center !important;\n}\n.rnp-faqs-wrap-template .faq-section .box-wrap p.subdatatext {\n    font-size: 0.9rem;\n    font-weight: 600;\n    margin-left: 5%;\n    font-family: 'Montserrat';\n    width: 155px;\n    text-align: center;\n    text-transform: uppercase;\n    margin-top: 10px;\n    line-height:24px;\n}\n.rnp-faqs-wrap-template .faq-section .box-wrap p.subdatatext.ar {\n    margin-left: 0;\n    margin-right: 5%;\n    font-family: 'Cairo';\n}\n.rnp-faqs-wrap-template .faq-section .questions-main-section {\n    width: 935px;\n    margin-left: 10%;\n    margin-right: 7%;\n    margin-top: 7%;\n    border-radius: 7px;\n    background-color: #f7f7f7;\n}\n.rnp-faqs-wrap-template .faq-section .panel-group .panel {\n    border-radius: 5px;\n    box-shadow: none;\n    border-color: #EEEEEE;\n    border: 1px solid #b2b2b2;\n    padding: 1px;\n    background-color: #f7f7f7;   \n    min-height: 82px;\n    margin-bottom: 4%;\n    height: auto;\n    }\n\n.rnp-faqs-wrap-template .faq-section  .panel-default > .panel-heading {\n        padding: 0;\n        border-radius: 0;\n        color: #212121;\n        background-color: #FAFAFA;\n        background-color: #f7f7f7;\n    }\n.rnp-faqs-wrap-template .faq-section  .panel-title {\n        font-size: 14px;\n    }\n\n.rnp-faqs-wrap-template .faq-section  .panel-title > a {\n        display: block;\n        padding: 15px;\n        text-decoration: none;\n        font-size: 1rem;\n        font-weight: 600;\n        margin-left: 30px;\n        font-family: Lato;\n        margin-top: 10px;\n        color: #191919;\n        line-height: 24px;\n    }\n.rnp-faqs-wrap-template .faq-section  .panel-title.ar > a {\n        margin-right: 30px;\n        font-family: Cairo;\n    }\n\n.rnp-faqs-wrap-template .faq-section  .more-less {\n        float: right;\n        color: #008344;\n        margin-right: 6%;\n        font-size: 20px;\n        -webkit-text-stroke: 0.5px #ffffff;\n    }\n.rnp-faqs-wrap-template .faq-section  .more-less.ar {\n        float: left;\n        margin-left: 2.5%;\n    }\n\n.rnp-faqs-wrap-template .faq-section  .panel-default > .panel-heading + .panel-collapse > .panel-body {\n        border-top-color: #EEEEEE;\n        background-color: #f7f7f7;\n        margin-left: 25px;\n        margin-right: 40px;\n        margin-top: -1%;\n    }\n.rnp-faqs-wrap-template .faq-section  .panel-default > .panel-heading + .panel-collapse > .panel-body.ar {\n        margin-left: 40px;\n        margin-right: 25px;\n    }\n.rnp-faqs-wrap-template .faq-section .panel-group .panel.highlight-panel {\n    border: 1px solid #008344 ;\n}\n\np.answers {\n   \n    color: #3C3C3C;\n    font-family: Lato;\n    font-size: 16px;\n    letter-spacing: 0;\n    line-height: 24px;\n}\n\np.answers.ar {\n    font-family: Cairo;\n}\n\nul li.answers-inlist {\n    text-align:justify;\n    tab-stops:center 52.15pt\n    color: #3C3C3C;\n    font-family: Lato;\n    font-size: 16px;\n    letter-spacing: 0;\n    line-height: 24px;\n}\n\nul li.answers-outlist.ar {\n    font-family: Cairo;\n}\nul li.answers-inlist {\n    margin-left:8px;\n    text-align:justify;\n    tab-stops:center 52.15pt\n    color: #3C3C3C;\n    font-family: Lato;\n    font-size: 16px;\n    letter-spacing: 0;\n    line-height: 24px;\n}\n\nul li.answers-inlist.ar {\n    font-family: Cairo;\n    margin-right:8px;\n    margin-left:0;\n}\n\n\n" }} />
              </div>
            </div>
          </section>
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
                    <li><a href="">Trouver un Centre de Services aux Citoyen (CSC)</a></li>
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
            {/* bottom footer */}
            <div className="btmfooter">
              <div className="container largeContainer">
               
              </div>
            </div>
          </footer>
        </div>
        <p className="footer-version">v0.21.02.23.3.239</p>
        
        
        <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-population-theme/css/clay.css?browserId=other&themeId=registrypopulationtheme_WAR_registrypopulationtheme&minifierType=css&languageId=en_US&b=7210&t=1702591938000" id="liferayAUICSS" rel="stylesheet" type="text/css" />
        <link className="lfr-css-file" data-senna-track="temporary" href="https://www.rnp.ma/o/registry-population-theme/css/main.css?browserId=other&themeId=registrypopulationtheme_WAR_registrypopulationtheme&minifierType=css&languageId=en_US&b=7210&t=1702591938000" id="liferayThemeCSS" rel="stylesheet" type="text/css" />
        <style data-senna-track="temporary" type="text/css" dangerouslySetInnerHTML={{__html: "\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\t\t\n\n\t\t\t\t\t\n\n#p_p_id_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_ .portlet-content {\n\n}\n\n\n\n\n\t\t\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t\t\t\n\n\t\t\n\n\t" }} />
        <link href="https://www.rnp.ma/o/registry-population-theme/css/lpg-plugins.css" rel="stylesheet" />
        <link href="https://www.rnp.ma/o/registry-population-theme/css/lpg-custom.css" rel="stylesheet" />
      </div>
    );
  }
};
export default Home;  