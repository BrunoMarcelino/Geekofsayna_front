import React from 'react';

import BreadcrumSection from './pages/sections/BreadcrumSection';
import ModalSection from './pages/sections/ModalSection';
import Side from './sideNavigation';

class DashBoard extends React.Component {
    
    render() {
        return (
            <div>
                <React.Fragment>
                <Side/>
                <BreadcrumSection />
                    <ModalSection />
                </React.Fragment>
            </div>
         )
    }
}
export default DashBoard