import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-details';
// import Service2 from './section-components/service-details2';
// import Service3 from './section-components/service-details3';
// import Service4 from './section-components/service-details4';
import Video from './section-components/video-v3';
import FunFact from './section-components/funfact-v5';
import Pricing from './section-components/pricing-v4';
import Testimonial from './section-components/testimonial-v2';
import Brand from './section-components/brand-v4';
import Case from './section-components/case';
import Footer from './global-components/footer';

const ServiceV1 = () => {
    return (
        <Router>
            <Navbar />
            <PageHeader headertitle="Service Details" />
            {/* <Switch>
                <Route exact path="/service-details1" component={Service1} />
                <Route exact path="/service-details2" component={Service2} />
                <Route exact path="/service-details3" component={Service3} />
                <Route exact path="/service-details4" component={Service4} />
            </Switch> */}
            <Service/>
            <Video />
            <FunFact />
            {/* <Pricing /> */}
            <Brand />
            {/* <Testimonial /> */}
            <Footer />
        </Router>
    );
}

export default ServiceV1;
