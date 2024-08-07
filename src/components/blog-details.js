import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header1';
import BlogDetails from './blog-components/blog-details';
import Footer from './global-components/footer';

const BlogList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Details"  />
        <BlogDetails />
        <Footer />
    </div>
}

export default BlogList

