import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import BlogGridView from './blog-components/blog-grid';
import Footer from './global-components/footer';

const BlogGrid = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="News & Articles"  />
        <BlogGridView />
        <Footer />
    </div>
}

export default BlogGrid

