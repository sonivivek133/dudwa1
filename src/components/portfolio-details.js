import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header1';
import PortfolioDetailsPage from './section-components/portfolio-details';
import RelatedProjct from './section-components/related-project';
import Cta from './section-components/cta-v10';
import Footer from './global-components/footer';

const PortfolioDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Portfolio Details"  />
        <PortfolioDetailsPage />
        <RelatedProjct />
        <Cta />
        <Footer />
    </div>
}

export default PortfolioDetails

