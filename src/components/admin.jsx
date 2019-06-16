import React from 'react';
import Routes from '../../src/components/Routes';
import TopNavigation from './../components/topNavigation';
import SideNavigation from './../components/sideNavigation';
import Footer from './../components/Footer';
import './../index.css'

class Admin extends React.Component {
    render() {
        return (
            <div className="flexible-content">
          <TopNavigation />
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
            </div>
        )
    }
}

export default Admin;