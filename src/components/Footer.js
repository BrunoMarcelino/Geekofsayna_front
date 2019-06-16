import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="text-center font-small darken-2">
            <div className="pt-4">
                <MDBBtn outline color="white" tag="a" href="" target="_blank">ExtActu@webcup<MDBIcon icon="download" className="ml-2"/></MDBBtn>
                <MDBBtn outline color="white" tag="a" href="" target="_blank"><MDBIcon icon="graduation-cap" className="ml-2"/></MDBBtn>
                <hr className="my4"/>
            </div>
        </MDBFooter>
    );
}

export default Footer;