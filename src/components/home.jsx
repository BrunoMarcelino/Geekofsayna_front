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
  url(a) {
    return "http://localhost:8080/image/" + a
  }

  render() {
    return (
      <div>
        <div>

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
                  <MDBNavLink to="#!" className="accueil">Prevention</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink exact={this.forceUpdate} to="/" className="accueil">Medicament</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink to="/login" className="accueil">Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink to="/register" className="accueil">Register</MDBNavLink>
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
                  <h3 className="h3-responsive " id="h3slide">Virus Intellectrons</h3>
                  <p>Description du virus</p>
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
                  <h3 className="h3-responsive" id="h3slide">Notre monde a bien reçu votre MSG</h3>
                  <p>Votre position est dévoilée</p>
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
                  <h3 className="h3-responsive" id="h3slide">Envahissement</h3>
                  <p>de votre systéme solaire</p>
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
                  <h3 className="h3-responsive" id="h3slide">Ils sont en chemin</h3>
                  <p>Préparer notre venue estimée</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
        <div className="container" id="total">
          <div className="row">
            <div className="col-md-9">
            <div className="row"  id="fond-article">
              <div className="col-md-3">
                <img src="../images/cerveau.png" id="image-article" alt="image1"/>
              </div>
              <div className="col-md-9">
                <p className="titre-article"> Trouble mentale</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi amet corporis perspiciatis quidem, ducimus sint nulla esse officiis enim inventore? Repudiandae ipsa nostrum beatae harum sunt, aspernatur dignissimos rem?</span>
                  <button className="btn btn-secondary bot">Commenter</button>
              </div>
              <hr className="hr-article"/>
              <div className="col-md-3">
                <img src="../images/main1.png" id="image-article" alt="image1"/>
              </div>
              <div className="col-md-9">
                <p className="titre-article"> paralysie partielle des main</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi amet corporis perspiciatis quidem, ducimus sint nulla esse officiis enim inventore? Repudiandae ipsa nostrum beatae harum sunt, aspernatur dignissimos rem?</span>
                <button className="btn btn-secondary bot">Commenter</button>
              </div>

              <div className="col-md-3">
                <img src="../images/entendu.png" id="image-article" alt="image1"/>
              </div>
              <div className="col-md-9">
                <p className="titre-article"> Déficience auditive</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi amet corporis perspiciatis quidem, ducimus sint nulla esse officiis enim inventore? Repudiandae ipsa nostrum beatae harum sunt, aspernatur dignissimos rem?</span>
                <button className="btn btn-secondary bot">Commenter</button>
              </div>

              <div className="col-md-3">
                <img src="../images/entend.png" id="image-article" alt="image1"/>
              </div>
              <div className="col-md-9">
                <p className="titre-article">  Déficience auditive</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi amet corporis perspiciatis quidem, ducimus sint nulla esse officiis enim inventore? Repudiandae ipsa nostrum beatae harum sunt, aspernatur dignissimos rem?</span>
                <button className="btn btn-secondary bot">Commenter</button>
              </div>
            </div>
            </div>

            
            <div className="col-md-3" id="fond-pub">
                  <h2>Votre Pub ici!</h2>
                  <img src="../images/med.jpg" alt="pub" id="image-pub"/>
            </div>
          </div>
    
        </div>

        <footer>ExtrActu @Webcup2019 Geek Of Sayna </footer>

        {this.renderRedirect()}
        {this.state.reponse.length > 0 ? this.state.reponse.map((art) => {
          return <div>
            <img src={this.url(art.image)} />
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

    )
  }
}


const mapStateToProps = (state) => {
  return {
    listeArticle: state.listeArticle
  }
}
export default connect(mapStateToProps)(Home)

