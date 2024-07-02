// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Navbar extends Component {
	
//     render() {
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         let imgattr = 'logo'
//         let anchor = '#'
//         return (
//            <header className="site-header-one go-top">
// 			  <nav className="main-nav__one stricky">
// 			    <div className="container-fluid">
// 			      <div className="main-nav__logo-box">
// 			        <Link to="/">
// 			          <img width='230px' height='120px' src={publicUrl+"assets/images/Dudwa-final-05.png" } alt={ imgattr } />
// 			        </Link>

//                          {/* {this.props.className === "stricky" && (
//                                 <Link to="/">
//                                     <img
//                                         width="230px"
//                                         height="110px"
//                                         src={publicUrl + "assets/images/Dudwa-final-06.png"}
//                                         alt={imgattr}
//                                     />
//                                 </Link>
//                             )}

//                             {this.props.className === "stricked-menu" && (
//                                 <Link to="/">
//                                     <img
//                                         width="230px"
//                                         height="110px"
//                                         src={publicUrl + "assets/images/Dudwa-final-05.png"}
//                                         alt={imgattr}
//                                     />
//                                 </Link>
//                             )} */}

// 			        <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
// 			      </div>{/* /.main-nav__logo-box */}

// 			      <div className="main-nav__main-navigation">
// 			        <ul className=" main-nav__navigation-box">
// 			          <li >
// 			            <Link to="/">Home</Link>
						
// 						{/*
// 			            <ul>
// 			              <li><Link to="/home-v2">Home 02</Link></li>
// 			              <li><Link to="/home-v3">Home 03</Link></li>
// 			              <li><Link to="/home-v4">Home 04</Link></li>
// 			            </ul>{/* /.sub-menu */}

// 			          </li>

// 			          <li>
// 			            <Link to="/about">About</Link>
// 			          </li>

// 			          <li>
// 					  <Link to="/service">Services</Link>
// 			            {/*<ul>
// 			              <li><Link to="/service">Services 01</Link></li>
// 			              {/*<li><Link to="/service-v2">Services 02</Link></li>
// 			              <li><Link to="/service-details">Services Details</Link></li>
// 			            </ul>{/* /.sub-menu */}
// 			          </li>

// 			          <li>
// 					  <Link to="/portfolio-standard">Portfolio</Link>
// 			            {/*<ul>
// 			              <li><Link to="/portfolio-standard">Portfolio Standard</Link></li>
// 			              {/*<li><Link to="/portfolio-full">Portfolio Full</Link></li>
// 			              <li><Link to="/portfolio-masonary">Portfolio Masonary</Link></li>
// 			              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
// 			            </ul>{/* /.sub-menu */}
// 			          </li>

// 					{/*<li className="dropdown">
// 					<a href="#">Pages</a>
// 					<ul>
// 						<li><Link to="/pricing">Pricing</Link></li>
// 						<li><Link to="/faq">FAQ</Link></li>
// 						<li><Link to="/testimonial">Testimonials</Link></li>
// 						<li><Link to="/team">Team</Link></li>
// 					</ul>
// 					</li>*/}

// 			          <li>
// 					  <Link to="/blog-grid">News</Link>
// 			            {/*<ul>
// 			              <li><Link to="/blog-grid">News Page</Link></li>
// 			              {/*<li><Link to="/blog-list">News List</Link></li>
// 			              <li><Link to="/blog-details">News Details</Link></li>
// 			            </ul>{/* /.sub-menu */}
// 			          </li>
					  
// 			          <li>
// 			            <Link to="/contact">Contact</Link>
// 			          </li>
// 			        </ul>
// 			      </div>{/* /.main-nav__main-navigation */}
// 			      <div className="main-nav__right">
// 			        {/*<Link to="/contact" className="thm-btn">Free Trial <i className="fa fa-angle-right" /></Link>
// 			        {/* /.thm-btn */}
// 			      </div>{/* /.main-nav__right */}
// 			    </div>
// 			  </nav>
// 			</header>
//         )
//     }
// }


// export default Navbar


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 180) {
            this.setState({ isSticky: true });
        } else {
            this.setState({ isSticky: false });
        }
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imgattr = 'logo';

        return (
            <header className={`site-header-one go-top ${this.state.isSticky ? 'sticky' : ''}`}>
                <nav className="main-nav__one stricky">
                    <div className="container-fluid">
                        <div className="main-nav__logo-box">
                            <Link to="/">
                                <img
                                    width='230px'
                                    height='120px'
                                    src={publicUrl + (this.state.isSticky ? "assets/images/Dudwa-final-05.png"  : "assets/images/Dudwa-final-06.png")}
                                    alt={imgattr}
                                />
                            </Link>

                            <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
                        </div>

                        <div className="main-nav__main-navigation">
                            <ul className="main-nav__navigation-box">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/service">Services</Link></li>
                                <li><Link to="/portfolio-standard">Portfolio</Link></li>
                                <li><Link to="/blog-grid">News</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="main-nav__right">
                            {/* <Link to="/contact" className="thm-btn">Free Trial <i className="fa fa-angle-right" /></Link> */}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar;
