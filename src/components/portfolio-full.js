import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header1';
import Portfolio from './section-components/portfolio-full';
import Cta from './section-components/cta-v11';
import Footer from './global-components/footer';

const PortfolioFull = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Portfolio Full Width"  />
        <Portfolio />
        <Cta />
        <Footer />
    </div>
}

export default PortfolioFull

