import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,  MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from "mdbreact";

class Home extends React.Component {
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
              <MDBContainer>
                <MDBNavbarBrand>
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
                      <MDBNavLink to="#!">Accueil</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Categorie</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Protection</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Medicaux</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem active>
                        <MDBNavLink to="">Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                        <MDBNavLink to="#!">Register</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
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

     <hr/>
          </MDBContainer>
            </div>
        )
    }
}

export default Home;