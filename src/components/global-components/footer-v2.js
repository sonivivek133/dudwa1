import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div className="site-footer-two  go-top" >
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-1.png"} alt={imgattr} className="site-footer-two__shape-1" />
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-2.png"} alt={imgattr} className="site-footer-two__shape-2" />
				<div className="site-footer-two__upper">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__about">
									<Link to="/">
										<img width='230px' height='110px' src={publicUrl + "assets/images/Dudwa-final-06.png"} alt={imgattr} />
									</Link>
									<p>Discover New Idea To Build Your Business. We are professional & Experienced Advertising Agency Dudwa</p>
									<div className="footer-widget__social">
										<a href="https://www.facebook.com/webtend/"><i className="fab fa-facebook-f" /></a>
										<a href="https://www.twitter.com/webtend/"><i className="fab fa-twitter" /></a>
										<a href="https://google.com/webtend"><i className="fab fa-google-plus-g" /></a>
										<a href="https://behance.com/webtend"><i className="fab fa-behance" /></a>
									</div>{/* /.footer-widget__social */}
								</div>{/* /.footer-widget footer-widget__about */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__post">
									<h3 className="footer-widget__title">Recent News</h3>{/* /.footer-widget__title */}
									<div className="footer-widget__post-wrap">
										<div className="footer-widget__post-single">
											<h3><Link to="/blog-details">Everything You Need Know About Alignment In Flexbox</Link></h3>
											<div className="footer-widget__post-meta">
												<Link to="/blog-details">By <span>Zekio Alex</span></Link>
												<Link to="/blog-details">Date <span>20 Dec 2019</span></Link>
											</div>{/* /.footer-widget__post-meta */}
										</div>{/* /.footer-widget__post-single */}
										<div className="footer-widget__post-single">
											<h3><Link to="/blog-details">Web Performance For Third Party Scripts: Smashing Cone.</Link></h3>
											<div className="footer-widget__post-meta">
												<Link to="/blog-details">By <span>Zekio Alex</span></Link>
												<Link to="/blog-details">Date <span>20 Dec 2019</span></Link>
											</div>{/* /.footer-widget__post-meta */}
										</div>{/* /.footer-widget__post-single */}
									</div>{/* /.footer-widget__post-wrap */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Quick Links</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/service">Our Services</Link></li>
										<li><Link to="/about">Setting &amp; Privecy</Link></li>
										<li><Link to="/contact">Need a Job?</Link></li>
										<li><Link to="/blog-grid">Latest Blog</Link></li>
										{/* <li><Link to="/contact">Get a Quote</Link></li> */}
									</ul>{/* /.footer-widget__links-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__contact">
									<h3 className="footer-widget__title">Contact Us</h3>{/* /.footer-widget__title */}
									{/* <p>Subscribe our newsletters to get more
										update and many more</p> */}
									{/* <form action="#" className="footer__mc-form">
										<input type="text" name="s" placeholder="Enter Your Email" />
										<button type="submit"><i className="fa fa-long-arrow-alt-right" /></button>
									</form> */}
									<ul className="footer-widget__contact-list list-unstyled">
										<li>
											<i className="far fa-envelope" />
											<a href="mailto:support@gmail.com">info@dudwa.com</a>
										</li>
										<li>
											<i className="far fa-phone" />
											<a href="tel:+8935000888">+8935000888</a>
										</li>
									</ul>{/* /.footer-widget__contact-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
						</div>{/* /.row */}
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__upper */}
				<div className="site-footer-two__bottom">
					<div className="container">
						<p>Copy@2024 <a href="#">Dudwa</a>. All Right Reserved.</p>
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__bottom */}
			</div>
		)
	}
}


export default Footer_v2