import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceDetails1 extends Component {

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
			          <h3>Outdoor BTL Services</h3>
			          <p>
						<h5>Billboards and Hoardings</h5>
						<ol>
							<li>Strategic Placement: Identifying high-traffic locations for maximum visibility.</li>
							<li>Creative Design: Designing eye-catching and impactful billboards that convey the brand message effectively.</li>
							<li>Installation and Maintenance: Ensuring high-quality installation and regular maintenance to keep the billboards in perfect condition.</li>
						</ol>

						<h5>Transit Advertising</h5>
						<ol>
							<li>Bus and Train Wraps: Full or partial vehicle wraps that turn public transportation into mobile billboards.</li>
							<li>Station Advertising: Posters, banners, and digital displays in train and bus stations to reach commuters.</li>
							<li>Taxi and Auto Rickshaw Ads: Ads on taxis and auto rickshaws for wide urban coverage.</li>
						</ol>

						<h5>Street Furniture</h5>
						<ol>
							<li>Bus Shelters: Advertising on bus shelters to capture the attention of waiting commuters.</li>
							<li>Kiosks and Booths: Temporary structures for promotional activities and direct interaction with the public.</li>
							<li>Public Benches and Waste Bins: Ads on public amenities for sustained visibility.</li>
						</ol>

						<h5>Ambient Advertising</h5>
						<ol>
							<li>Guerrilla Marketing: Innovative and unconventional methods to create memorable brand experiences in public spaces.</li>
							<li>Building Wraps: Large-scale advertisements that cover entire buildings, making a strong visual impact.</li>
							<li>3D Installations: Eye-catching 3D structures in high-footfall areas to engage passersby.</li>
						</ol>

						<h5>Event Sponsorships</h5>
						<ol>
							<li>Branding at Sports Events: Sponsoring sports events and placing advertisements in stadiums and sports venues.</li>
							<li>Festivals and Concerts: Sponsorship and branding at cultural festivals, concerts, and public gatherings.</li>
							<li>Community Events: Partnering with local events to promote the brand and engage with the community.</li>
						</ol>
                     </p>

					
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

					 
					 <h3>Integrated BTL Campaigns</h3>
			          <p>
						<h5>Cross-Promotions</h5>
						<ol>
							<li>Collaborative Campaigns: Partnering with complementary brands for joint promotions and cross-marketing.</li>
							<li>Multi-Channel Integration: Combining outdoor and indoor BTL activities for a cohesive campaign strategy.</li>
						</ol>

						<h5>Experiential Marketing</h5>
						<ol>
							<li>Pop-Up Stores and Activations: Temporary retail spaces and interactive experiences to engage consumers directly.</li>
							<li>Roadshows: Traveling events and mobile promotions to reach audiences in different locations.</li>
							<li>Sampling Programs: Distributing product samples in strategic locations to generate buzz and encourage trials.</li>
						</ol>

						<h5>Loyalty Programs</h5>
						<ol>
							<li>Customer Engagement: Creating loyalty programs to reward repeat customers and build long-term relationships.</li>
							<li>Interactive Campaigns: Using gamification and interactive elements to engage and retain customers.</li>
						</ol>

                     </p>


					 <h3>Digital Integration</h3>
			          <p>
						<h5>Social Media</h5>
						<ol>
							<li>Customer Engagement: Creating loyalty programs to reward repeat customers and build long-term relationships.</li>
							<li>QR Codes and Augmented Reality: Using QR codes and AR to create interactive and immersive brand experiences.</li>
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

export default ServiceDetails1