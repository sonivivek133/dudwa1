import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header5';
import Contact from './section-components/contact-page';
import Footer from './global-components/footer';

const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact"  />
        <Contact />
        <Footer />
    </div>
}

export default ContactPage

