// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// class ServiceDetails1 extends Component {

//     render() {

//     let publicUrl = process.env.PUBLIC_URL+'/'
//     let imagealt = 'image'

//     return	<section className="service-details">
// 			  <div className="container">
// 			    <div className="row">
// 			      <div className="col-lg-6 clearfix">
// 			        <img src={publicUrl+"assets/images/resources/service-d-moc-1.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
// 			      </div>{/* /.col-lg-6 */}
// 			      <div className="col-lg-6">
// 			        <div className="service-details__content">
// 			          <h3>Outdoor BTL Services</h3>
// 			          <p>
// 						<h5>Billboards and Hoardings</h5>
// 						<ol>
// 							<li>Strategic Placement: Identifying high-traffic locations for maximum visibility.</li>
// 							<li>Creative Design: Designing eye-catching and impactful billboards that convey the brand message effectively.</li>
// 							<li>Installation and Maintenance: Ensuring high-quality installation and regular maintenance to keep the billboards in perfect condition.</li>
// 						</ol>

// 						<h5>Transit Advertising</h5>
// 						<ol>
// 							<li>Bus and Train Wraps: Full or partial vehicle wraps that turn public transportation into mobile billboards.</li>
// 							<li>Station Advertising: Posters, banners, and digital displays in train and bus stations to reach commuters.</li>
// 							<li>Taxi and Auto Rickshaw Ads: Ads on taxis and auto rickshaws for wide urban coverage.</li>
// 						</ol>

// 						<h5>Street Furniture</h5>
// 						<ol>
// 							<li>Bus Shelters: Advertising on bus shelters to capture the attention of waiting commuters.</li>
// 							<li>Kiosks and Booths: Temporary structures for promotional activities and direct interaction with the public.</li>
// 							<li>Public Benches and Waste Bins: Ads on public amenities for sustained visibility.</li>
// 						</ol>

// 						<h5>Ambient Advertising</h5>
// 						<ol>
// 							<li>Guerrilla Marketing: Innovative and unconventional methods to create memorable brand experiences in public spaces.</li>
// 							<li>Building Wraps: Large-scale advertisements that cover entire buildings, making a strong visual impact.</li>
// 							<li>3D Installations: Eye-catching 3D structures in high-footfall areas to engage passersby.</li>
// 						</ol>

// 						<h5>Event Sponsorships</h5>
// 						<ol>
// 							<li>Branding at Sports Events: Sponsoring sports events and placing advertisements in stadiums and sports venues.</li>
// 							<li>Festivals and Concerts: Sponsorship and branding at cultural festivals, concerts, and public gatherings.</li>
// 							<li>Community Events: Partnering with local events to promote the brand and engage with the community.</li>
// 						</ol>
//                      </p>

					
// 					 <h3>Indoor BTL Services</h3>
// 			          <p>
// 						<h5>Point of Sale (POS) Advertising</h5>
// 						<ol>
// 							<li>Counter Displays: Eye-catching displays placed at retail counters to influence purchase decisions.</li>
// 							<li>Shelf Talkers and Wobblers: Small signs attached to shelves to draw attention to specific products.</li>
// 							<li>Digital Signage: Interactive screens and displays inside stores for dynamic advertising.</li>
// 						</ol>

// 						<h5>In-Store Promotions</h5>
// 						<ol>
// 							<li>Product Demonstrations: Live demonstrations to showcase product features and benefits.</li>
// 							<li>Sampling Campaigns: Offering free samples to customers to encourage trial and purchase.</li>
// 							<li>In-Store Contests and Sweepstakes: Engaging customers with contests and offering prizes to boost participation.</li>
// 						</ol>

// 						<h5>Trade Shows and Exhibitions</h5>
// 						<ol>
// 							<li>Custom Booth Design: Designing and building customized exhibition booths to attract visitors.</li>
// 							<li>Interactive Displays: Using technology and interactive elements to engage visitors at trade shows.</li>
// 							<li>Promotional Materials: Creating brochures, flyers, and other materials to support trade show presence.</li>
// 						</ol>

// 						<h5>Mall Advertising</h5>
// 						<ol>
// 							<li>Digital and Static Displays: Advertising on screens and static displays in malls to reach shoppers.</li>
// 							<li>Promotional Stalls: Setting up promotional stalls in malls to directly interact with customers.</li>
// 							<li>Event Sponsorships: Sponsoring events and activities within malls to increase brand visibility.</li>
// 						</ol>

// 						<h5>Cinema Advertising</h5>
// 						<ol>
// 							<li>On-Screen Ads: Advertising before movie screenings to capture the attention of cinema-goers.</li>
// 							<li>Lobby Displays: Banners, posters, and digital screens in cinema lobbies to engage audiences before and after movies.</li>
// 							<li>Experiential Marketing: Creating immersive brand experiences within cinema complexes.</li>
// 						</ol>
//                      </p>

					 
// 					 <h3>Integrated BTL Campaigns</h3>
// 			          <p>
// 						<h5>Cross-Promotions</h5>
// 						<ol>
// 							<li>Collaborative Campaigns: Partnering with complementary brands for joint promotions and cross-marketing.</li>
// 							<li>Multi-Channel Integration: Combining outdoor and indoor BTL activities for a cohesive campaign strategy.</li>
// 						</ol>

// 						<h5>Experiential Marketing</h5>
// 						<ol>
// 							<li>Pop-Up Stores and Activations: Temporary retail spaces and interactive experiences to engage consumers directly.</li>
// 							<li>Roadshows: Traveling events and mobile promotions to reach audiences in different locations.</li>
// 							<li>Sampling Programs: Distributing product samples in strategic locations to generate buzz and encourage trials.</li>
// 						</ol>

// 						<h5>Loyalty Programs</h5>
// 						<ol>
// 							<li>Customer Engagement: Creating loyalty programs to reward repeat customers and build long-term relationships.</li>
// 							<li>Interactive Campaigns: Using gamification and interactive elements to engage and retain customers.</li>
// 						</ol>

//                      </p>


// 					 <h3>Digital Integration</h3>
// 			          <p>
// 						<h5>Social Media</h5>
// 						<ol>
// 							<li>Customer Engagement: Creating loyalty programs to reward repeat customers and build long-term relationships.</li>
// 							<li>QR Codes and Augmented Reality: Using QR codes and AR to create interactive and immersive brand experiences.</li>
// 						</ol>
//                      </p>


			//           <Link to="/service" className="service-details__link">Continue Reading</Link>{/* /.service-details__link */}
			//         </div>{/* /.service-details__content */}
			//       </div>{/* /.col-lg-6 */}
			//     </div>{/* /.row */}
			//     <div className="row">
			//       <div className="col-lg-6">
			//         <img src={publicUrl+"assets/images/resources/service-d-moc-2.png"} alt={ imagealt } className="wow fadeInRight" data-wow-duration="1500ms" />
			//       </div>{/* /.col-lg-6 */}
			//       <div className="col-lg-6">
			//         <div className="service-details__content">
			//           <h3>We Help To Grow Your <br /> Business Growth</h3>
			//           <ul className="list-unstyled service-details__list">
			//             <li>
			//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem acclor emquei laudantium,
			//               totam rem aperiam, eaque ipsa quae ab illo inventore
			//             </li>
			//             <li>But I must explain to you how all this mistaken idea of denouncing plaerais
			//               ing pain was born and I will give you a complete account of the syst expound the actual
			//               teachings of the great explorer of the truth</li>
			//             <li>Dccusamus et iusto odio dignissimos ducimus qui blanditiis prae oluptatum deleniti atque
			//               corrupti quos dolores et quas molestia</li>
			//           </ul>{/* /.list-unstyled service-details__list */}
			//           <Link to="/service" className="service-details__link">Continue Reading</Link>{/* /.service-details__link */}
			//         </div>{/* /.service-details__content */}
			//       </div>{/* /.col-lg-6 */}

			// //     </div>
			//   </div>{/* /.container */}
// 			</section>

//         }
// }

// export default ServiceDetails1








import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServiceDetails1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outdoorExpanded: false,
      indoorExpanded: false,
      integratedExpanded: false,
      digitalExpanded: false,
	  eventExpanded: false,
      posExpanded: false,
      promotionsExpanded: false,
      tradeShowsExpanded: false,
      mallExpanded: false,
      cinemaExpanded: false,
      crossPromotionsExpanded: false,
      experientialExpanded: false,
      loyaltyProgramsExpanded: false,
      socialMediaExpanded: false,
    //   mobileExpanded: false,
    //   emailExpanded: false,
    //   webExpanded: false,
    };
  }

  toggleSection = (section) => {
    this.setState((prevState) => ({
      [section]: !prevState[section],
    }));
  };

  render() {
    const { outdoorExpanded, indoorExpanded, integratedExpanded, digitalExpanded } = this.state;
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

	const {
		eventExpanded,
		posExpanded,
		promotionsExpanded,
		tradeShowsExpanded,
		mallExpanded,
		cinemaExpanded,
		crossPromotionsExpanded,
		experientialExpanded,
		loyaltyProgramsExpanded,
		socialMediaExpanded,
		// mobileExpanded,
		// emailExpanded,
		// webExpanded,
	  } = this.state;

    return (
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img
                src={publicUrl + "assets/images/resources/service-d-moc-1.png"}
                alt={imagealt}
                className="float-right wow fadeInLeft"
                data-wow-duration="1500ms"
              />
            </div>
            <div className="col-lg-6">
              <div className="service-details__content">
                <h3>Outdoor BTL Services</h3>
                <p>
                  <h5 onClick={() => this.toggleSection('outdoorExpanded')} style={{ cursor: 'pointer' }}>
                  {outdoorExpanded ? 'v ' : '> '} Billboards and Hoardings 
                  </h5>
                  {outdoorExpanded && (
                    <ol>
                      <li>Strategic Placement: Identifying high-traffic locations for maximum visibility.</li>
                      <li>Creative Design: Designing eye-catching and impactful billboards that convey the brand message effectively.</li>
                      <li>Installation and Maintenance: Ensuring high-quality installation and regular maintenance to keep the billboards in perfect condition.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('indoorExpanded')} style={{ cursor: 'pointer' }}>
                  {indoorExpanded ? 'v ' : '> '}Transit Advertising 
                  </h5>
                  {indoorExpanded && (
                    <ol>
                      <li>Bus and Train Wraps: Full or partial vehicle wraps that turn public transportation into mobile billboards.</li>
                      <li>Station Advertising: Posters, banners, and digital displays in train and bus stations to reach commuters.</li>
                      <li>Taxi and Auto Rickshaw Ads: Ads on taxis and auto rickshaws for wide urban coverage.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('integratedExpanded')} style={{ cursor: 'pointer' }}>
                  {integratedExpanded ? 'v ' : '> '} Street Furniture 
                  </h5>
                  {integratedExpanded && (
                    <ol>
                      <li>Bus Shelters: Advertising on bus shelters to capture the attention of waiting commuters.</li>
                      <li>Kiosks and Booths: Temporary structures for promotional activities and direct interaction with the public.</li>
                      <li>Public Benches and Waste Bins: Ads on public amenities for sustained visibility.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('digitalExpanded')} style={{ cursor: 'pointer' }}>
                  {digitalExpanded ? 'v ' : '> '}  Ambient Advertising 
                  </h5>
                  {digitalExpanded && (
                    <ol>
                      <li>Guerrilla Marketing: Innovative and unconventional methods to create memorable brand experiences in public spaces.</li>
                      <li>Building Wraps: Large-scale advertisements that cover entire buildings, making a strong visual impact.</li>
                      <li>3D Installations: Eye-catching 3D structures in high-footfall areas to engage passersby.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('eventExpanded')} style={{ cursor: 'pointer' }}>
                  {eventExpanded ? 'v ' : '> '} Event Sponsorships 
                  </h5>
                  {eventExpanded && (
                    <ol>
                      <li>Branding at Sports Events: Sponsoring sports events and placing advertisements in stadiums and sports venues.</li>
                      <li>Festivals and Concerts: Sponsorship and branding at cultural festivals, concerts, and public gatherings.</li>
                      <li>Community Events: Partnering with local events to promote the brand and engage with the community.</li>
                    </ol>
                  )}
                </p>

                <br/>

                <h3>Indoor BTL Services</h3>
                <p>
                  <h5 onClick={() => this.toggleSection('posExpanded')} style={{ cursor: 'pointer' }}>
                  {posExpanded ? 'v ' : '<'}  Point of Sale (POS) Advertising 
                  </h5>
                  {posExpanded && (
                    <ol>
                      <li>Counter Displays: Eye-catching displays placed at retail counters to influence purchase decisions.</li>
                      <li>Shelf Talkers and Wobblers: Small signs attached to shelves to draw attention to specific products.</li>
                      <li>Digital Signage: Interactive screens and displays inside stores for dynamic advertising.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('promotionsExpanded')} style={{ cursor: 'pointer' }}>
                  {promotionsExpanded ? 'v ' : '< '} In-Store Promotions 
                  </h5>
                  {promotionsExpanded && (
                    <ol>
                      <li>Product Demonstrations: Live demonstrations to showcase product features and benefits.</li>
                      <li>Sampling Campaigns: Offering free samples to customers to encourage trial and purchase.</li>
                      <li>In-Store Contests and Sweepstakes: Engaging customers with contests and offering prizes to boost participation.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('tradeShowsExpanded')} style={{ cursor: 'pointer' }}>
                  {tradeShowsExpanded ? 'v ' : '< '} Trade Shows and Exhibitions 
                  </h5>
                  {tradeShowsExpanded && (
                    <ol>
                      <li>Custom Booth Design: Designing and building customized exhibition booths to attract visitors.</li>
                      <li>Interactive Displays: Using technology and interactive elements to engage visitors at trade shows.</li>
                      <li>Promotional Materials: Creating brochures, flyers, and other materials to support trade show presence.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('mallExpanded')} style={{ cursor: 'pointer' }}>
                  {mallExpanded ? 'v ' : '< '} Mall Advertising 
                  </h5>
                  {mallExpanded && (
                    <ol>
                      <li>Digital and Static Displays: Advertising on screens and static displays in malls to reach shoppers.</li>
                      <li>Promotional Stalls: Setting up promotional stalls in malls to directly interact with customers.</li>
                      <li>Event Sponsorships: Sponsoring events and activities within malls to increase brand visibility.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('cinemaExpanded')} style={{ cursor: 'pointer' }}>
                  {cinemaExpanded ? 'v ' : '< '}  Cinema Advertising 
                  </h5>
                  {cinemaExpanded && (
                    <ol>
                      <li>On-Screen Ads: Advertising before movie screenings to capture the attention of cinema-goers.</li>
                      <li>Lobby Displays: Banners, posters, and digital screens in cinema lobbies to engage audiences before and after movies.</li>
                      <li>Experiential Marketing: Creating immersive brand experiences within cinema complexes.</li>
                    </ol>
                  )}
                </p>

				<br/>

                <h3>Integrated BTL Campaigns</h3>
                <p>
                  <h5 onClick={() => this.toggleSection('crossPromotionsExpanded')} style={{ cursor: 'pointer' }}>
                  {crossPromotionsExpanded ? 'v ' : '< '} Cross-Promotions 
                  </h5>
                  {crossPromotionsExpanded && (
                    <ol>
                      <li>Collaborative Campaigns: Partnering with complementary brands for joint promotions and cross-marketing.</li>
                      <li>Multi-Channel Integration: Combining outdoor and indoor BTL activities for a cohesive campaign strategy.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('experientialExpanded')} style={{ cursor: 'pointer' }}>
                  {experientialExpanded ? 'v ' : '< '} Experiential Marketing 
                  </h5>
                  {experientialExpanded && (
                    <ol>
                      <li>Pop-Up Stores and Activations: Temporary retail spaces and interactive experiences to engage consumers directly.</li>
                      <li>Roadshows: Traveling events and mobile promotions to reach audiences in different locations.</li>
                      <li>Sampling Programs: Distributing product samples in strategic locations to generate buzz and encourage trials.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('loyaltyProgramsExpanded')} style={{ cursor: 'pointer' }}>
                  {loyaltyProgramsExpanded ? 'v ' : '< '}  Loyalty Programs 
                  </h5>
                  {loyaltyProgramsExpanded && (
                    <ol>
                      <li>Customer Engagement: Creating loyalty programs to reward repeat customers and build long-term relationships.</li>
                      <li>Interactive Campaigns: Using gamification and interactive elements to engage and retain customers.</li>
                    </ol>
                  )}
                </p>

				<br/>

                <h3>Digital Integration</h3>
                <p>
                  <h5 onClick={() => this.toggleSection('socialMediaExpanded')} style={{ cursor: 'pointer' }}>
                  {socialMediaExpanded ? 'v ' : '< '} Social Media 
                  </h5>
                 
				  {socialMediaExpanded && (
                    <ol>
                      <li>Social Media Campaigns: Running targeted campaigns on platforms like Facebook, Instagram, and Twitter.</li>
                      <li>Influencer Collaborations: Partnering with influencers to amplify brand messages and reach a wider audience.</li>
                      <li>User-Generated Content: Encouraging customers to create and share content related to the brand.</li>
                    </ol>
                  )}

                  {/* <h5 onClick={() => this.toggleSection('mobileExpanded')} style={{ cursor: 'pointer' }}>
                    Mobile Marketing {mobileExpanded ? '-' : '+'}
                  </h5>
                  {mobileExpanded && (
                    <ol>
                      <li>SMS and MMS Campaigns: Sending promotional messages and multimedia content directly to consumers' mobile devices.</li>
                      <li>Mobile Apps: Developing branded apps to provide value-added services and engage customers.</li>
                      <li>Location-Based Marketing: Using geolocation data to deliver personalized offers and promotions.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('emailExpanded')} style={{ cursor: 'pointer' }}>
                    Email Marketing {emailExpanded ? '-' : '+'}
                  </h5>
                  {emailExpanded && (
                    <ol>
                      <li>Newsletter Campaigns: Sending regular updates and promotional content to subscribers.</li>
                      <li>Automated Email Journeys: Setting up automated email sequences to nurture leads and retain customers.</li>
                      <li>Personalized Offers: Using data insights to deliver personalized offers and recommendations.</li>
                    </ol>
                  )}

                  <h5 onClick={() => this.toggleSection('webExpanded')} style={{ cursor: 'pointer' }}>
                    Web Integration {webExpanded ? '-' : '+'}
                  </h5>
                  {webExpanded && (
                    <ol>
                      <li>Microsites and Landing Pages: Creating dedicated microsites and landing pages for specific campaigns.</li>
                      <li>Interactive Content: Developing interactive web content to engage visitors and encourage participation.</li>
                      <li>SEO and SEM: Optimizing content for search engines and running paid search campaigns to drive traffic.</li>
                    </ol>
                  )} */}
                </p>

				
                {/* <h3>Conclusion</h3>
                <p>
                  Our BTL services are designed to create impactful and memorable brand experiences that resonate with your target audience. Whether you're looking to engage consumers through outdoor, indoor, integrated, or digital campaigns, our team of experts will work with you to develop a customized strategy that meets your unique needs and objectives. Contact us today to learn more about how we can help elevate your brand's presence and drive results.
                </p> */}

				{/* <Link to="/service" className="service-details__link">Continue Reading</Link>/.service-details__link */}
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			    <div className="row" style={{marginTop:'100px'}}>
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
			          {/* <Link to="/service" className="service-details__link">Continue Reading</Link> */}
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
				  
                {/* <div className="service-details__bottom">
                  <Link to="/contact" className="thm-btn">Contact Us</Link>
                  <a href="#" className="service-details__share">
                    <i className="fa fa-share-alt"></i> Share
                  </a>
                </div> */}
              </div>
            </div>
      </section>
    );
  }
}

export default ServiceDetails1;

