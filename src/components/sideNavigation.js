import React from 'react';
import logo from "../images/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush" id="lien-dasboard-total">
                <NavLink exact={true} to="/">
                    <MDBListGroupItem active id="lien-dasboard" >
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/actualites" >
                    <MDBListGroupItem id="lien-dasboard"  active>
                        <MDBIcon icon="user" className="mr-3"/>
                      Ajout Actualités
                    </MDBListGroupItem>
                </NavLink>
                <NavLink   to="/medicament" >
                    <MDBListGroupItem id="lien-dasboard"  active>
                        Ajout Medicaments
                    </MDBListGroupItem>
                </NavLink>
                <NavLink  to="/protection">
                    <MDBListGroupItem id="lien-dasboard"  active>
                        <MDBIcon icon="map" className="mr-3"/>
                      Ajout Protéction
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;