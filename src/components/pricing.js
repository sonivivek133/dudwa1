import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import PricingV4 from './section-components/pricing-v4';
import PricingV5 from './section-components/pricing-v5';
import Cta from './section-components/cta-v12';
import Footer from './global-components/footer-v2';

const PricingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing Plan"  />
        <PricingV4 />
        <PricingV5 />
        <Cta />
        <Footer />
    </div>
}

export default PricingPage

