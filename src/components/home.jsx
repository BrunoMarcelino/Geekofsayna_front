import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";


class Home extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    constructor(props) {
        super(props);
        this.state = {
            reponse: [],
            redirect: false,
            id: ""
        };
    }

    setRedirect = (id) => {
        this.setState({
            redirect: true,
            id: id
        })
    }




    renderRedirect = () => {
        if (this.state.redirect) {
            var url = '/article/' + this.state.id
            return <Redirect to={url} />
        }
    }


    componentDidMount() {
        this.callAPI();
    }


    callAPI() {
        fetch("http://localhost:8080/article")
            .then(res => res.json())
            .then(res => {
                console.log("res", res);

                this.setState({ reponse: res })
            });

    }

    render() {
        return (
            <div>
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
                        <MDBCarousel id="slide"
                            activeItem={1}
                            length={4}
                            showControls={true}
                            showIndicators={true}
                            className="z-depth-1"
                        >
                            <MDBCarouselInner>
                                <MDBCarouselItem itemId="1">
                                    <MDBView>

                                        <img
                                            className="d-block w-100"
                                            src="../images/galaxy1.png"
                                            alt="First slide"
                                        />

                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive " id="h3slide">Light mask</h3>
                                        <p>First text</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="../images/galaxy2.png"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive" id="h3slide">Strong mask</h3>
                                        <p>Second text</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="../images/galaxy3.png"
                                            alt="Third slide"
                                        />
                                        <MDBMask overlay="black-slight" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive" id="h3slide">Slight mask</h3>
                                        <p>Third text</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="4">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="../images/galaxy4.png"
                                            alt="Mattonit's item"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive" id="h3slide">Sopot Beach</h3>
                                        <p>Taken june 21th by @mattonit</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                            </MDBCarouselInner>
                        </MDBCarousel>

                        <hr />
                    </MDBContainer>
                </div>
                {this.renderRedirect()}
                {this.state.reponse.length > 0 ? this.state.reponse.map((art) => {
                    return <div>
                        <div>nom :{art.nom}</div>
                        <div>article :{art.article}</div>

                        <div>commentaire :{art.comment.map((com) => {
                            return <div>
                                <div>comment de {com.nom}</div>
                                <div>le commentaire :{com.commentaire}</div>
                            </div>
                        })}</div>
                        <button onClick={() => this.setRedirect(art._id)}>voir</button>

                    </div>
                }

                ) : ""}


                </div>
                
        )}}
               
        
        const mapStateToProps = (state) => {
    return {
                    listeArticle: state.listeArticle
            }
        }
        export default connect(mapStateToProps)(Home)
        
