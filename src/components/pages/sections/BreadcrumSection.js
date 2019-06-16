import React from 'react';
import { MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline } from 'mdbreact';

const BreadcrumSection = () => {
  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>Admin</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>admin</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBFormInline className="md-form m-0">
                <input className="form-control form-control-sm" type="search" placeholder="recherche" aria-label="Search"/>
            </MDBFormInline>
        </MDBCardBody>
    </MDBCard>
  )
}

export default BreadcrumSection;

