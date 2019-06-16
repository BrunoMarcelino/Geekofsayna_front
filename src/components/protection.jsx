import React from 'react';
import './protection.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";

class Protection extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    render() {
        return (
            <div>
                <MDBContainer className="pb-5">
                    <MDBNavbar id="Totalhome"
                        color="bg-danger"
                        style={{ Bacgroundcolor: "blue" }}
                        dark
                        expand="md"
                        scrolling
                    >

                        <MDBNavbarBrand>
                            <img src="../images/logo.png" id="logo-header" alt="imagelogo" />
                            <strong className="white-text">ExtrActu</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            onClick={this.toggleCollapse("navbarCollapse")}
                        />
                        <MDBCollapse
                            id="navbarCollapse"
                            isOpen={this.state.collapseID}
                            navbar
                        >
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!" className="accueil">Accueil</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!" className="accueil">Categorie</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!" className="accueil">Protection</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!" className="accueil">Medicaux</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem active>
                                    <MDBNavLink to="" className="accueil">Login</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!" className="accueil">Register</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>

                    </MDBNavbar>
            
                </MDBContainer>
                <div className="container" id="totalprotection">
                    <h1 id="tete">Protection contre les effets de éléctrons </h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="./images/cerveau.png" alt="imag-1" />
                                <div class="card-body">
                                    <h4 class="card-title"><a>Cerveau</a></h4>
                                    <p class="card-text">Protection contre les effets secondaire</p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="./images/vision.png" alt="imag-2" />
                                <div class="card-body">
                                    <h4 class="card-title"><a>Vision</a></h4>
                                    <p class="card-text">Protection contre les effets</p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="./images/main.png" alt="imag-2" />
                                <div class="card-body">
                                    <h4 class="card-title"><a>Paralysie des mains</a></h4>
                                    <p class="card-text">Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Protection;