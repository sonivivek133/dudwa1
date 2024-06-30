import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceDetails2 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-details">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 clearfix">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-1.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>Indoor BTL Services</h3>
			          <p>
						<h5>Point of Sale (POS) Advertising</h5>
						<ol>
							<li>Counter Displays: Eye-catching displays placed at retail counters to influence purchase decisions.</li>
							<li>Shelf Talkers and Wobblers: Small signs attached to shelves to draw attention to specific products.</li>
							<li>Digital Signage: Interactive screens and displays inside stores for dynamic advertising.</li>
						</ol>

						<h5>In-Store Promotions</h5>
						<ol>
							<li>Product Demonstrations: Live demonstrations to showcase product features and benefits.</li>
							<li>Sampling Campaigns: Offering free samples to customers to encourage trial and purchase.</li>
							<li>In-Store Contests and Sweepstakes: Engaging customers with contests and offering prizes to boost participation.</li>
						</ol>

						<h5>Trade Shows and Exhibitions</h5>
						<ol>
							<li>Custom Booth Design: Designing and building customized exhibition booths to attract visitors.</li>
							<li>Interactive Displays: Using technology and interactive elements to engage visitors at trade shows.</li>
							<li>Promotional Materials: Creating brochures, flyers, and other materials to support trade show presence.</li>
						</ol>

						<h5>Mall Advertising</h5>
						<ol>
							<li>Digital and Static Displays: Advertising on screens and static displays in malls to reach shoppers.</li>
							<li>Promotional Stalls: Setting up promotional stalls in malls to directly interact with customers.</li>
							<li>Event Sponsorships: Sponsoring events and activities within malls to increase brand visibility.</li>
						</ol>

						<h5>Cinema Advertising</h5>
						<ol>
							<li>On-Screen Ads: Advertising before movie screenings to capture the attention of cinema-goers.</li>
							<li>Lobby Displays: Banners, posters, and digital screens in cinema lobbies to engage audiences before and after movies.</li>
							<li>Experiential Marketing: Creating immersive brand experiences within cinema complexes.</li>
						</ol>
                     </p>
			          <Link to="/service" className="service-details__link">Continue Reading</Link>{/* /.service-details__link */}
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			    <div className="row">
			      <div className="col-lg-6">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-2.png"} alt={ imagealt } className="wow fadeInRight" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>We Help To Grow Your <br /> Business Growth</h3>
			          <ul className="list-unstyled service-details__list">
			            <li>
			              Sed ut perspiciatis unde omnis iste natus error sit voluptatem acclor emquei laudantium,
			              totam rem aperiam, eaque ipsa quae ab illo inventore
			            </li>
			            <li>But I must explain to you how all this mistaken idea of denouncing plaerais
			              ing pain was born and I will give you a complete account of the syst expound the actual
			              teachings of the great explorer of the truth</li>
			            <li>Dccusamus et iusto odio dignissimos ducimus qui blanditiis prae oluptatum deleniti atque
			              corrupti quos dolores et quas molestia</li>
			          </ul>{/* /.list-unstyled service-details__list */}
			          <Link to="/service" className="service-details__link">Continue Reading</Link>{/* /.service-details__link */}
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default ServiceDetails2