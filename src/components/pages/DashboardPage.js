import React from 'react';

import BreadcrumSection from './sections/BreadcrumSection';
import ModalSection from './sections/ModalSection';

const DashboardPage =  () => {
  return (
    <React.Fragment>
      <BreadcrumSection />
          <ModalSection />
    </React.Fragment>
  )
}

export default DashboardPage;