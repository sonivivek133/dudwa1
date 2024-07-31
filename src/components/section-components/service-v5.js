// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// class ServiceV5 extends Component {

//     render() {

//     let publicUrl = process.env.PUBLIC_URL+'/'
//     let imagealt = 'image'

//     return	<section className="service-two service-two__service-page  go-top" style={{marginBottom:'-50px'}}>
// 		  <div className="container">
// 		    <div className="row">

// 			<div className="col-lg-12">
// 			<div className="block-title-two text-left">
// 		            <p>Our Services</p>
// 		            <h3>We Offer Exclusive <br /> Service For You</h3>
// 		          </div>{/* /.block-title-two */}
// 		        <div className="service-two__box-wrap">
// 		          <div className="row">
// 		            <div className="col-md-6">
// 		              <div className="service-two__single js-tilt">
// 		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
// 		                {/* /.service-two__single-image */}
// 		                <div className="service-two__single-inner">
// 		                  <i className="fal fa-hand-holding-usd" />
// 		                  <h3><Link to="/service-details">Outdoor BTL Services</Link></h3>
// 		                  <p>Billboards and Hoardings, Transit Advertising, Street Furniture, Ambient Advertising, Event Sponsorships</p>
// 		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
// 		                  {/* /.service-two__link */}
// 		                </div>{/* /.service-two__single-inner */}
// 		              </div>{/* /.service-two__single */}
// 		            </div>{/* /.col-md-6 */}
// 		            <div className="col-md-6">
// 		              <div className="service-two__single js-tilt">
// 		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
// 		                {/* /.service-two__single-image */}
// 		                <div className="service-two__single-inner">
// 		                  <i className="fal fa-umbrella-beach" />
// 		                  <h3><Link to="/service-details">Indoor BTL Services</Link></h3>
// 		                  <p>Point of Sale (POS) Advertising, In-Store Promotions, Trade Shows and Exhibitions, Mall Advertising, Cinema Advertising </p>
// 		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
// 		                  {/* /.service-two__link */}
// 		                </div>{/* /.service-two__single-inner */}
// 		              </div>{/* /.service-two__single */}
// 		            </div>{/* /.col-md-6 */}
// 		            <div className="col-md-6">
// 		              <div className="service-two__single js-tilt">
// 		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
// 		                {/* /.service-two__single-image */}
// 		                <div className="service-two__single-inner">
// 		                  <i className="fal fa-paper-plane" />
// 		                  <h3><Link to="/service-details">Integrated BTL Campaigns</Link></h3>
// 		                  <p>Cross-Promotions, Experiential Marketing, Loyalty Programs</p>
// 		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
// 		                  {/* /.service-two__link */}
// 		                </div>{/* /.service-two__single-inner */}
// 		              </div>{/* /.service-two__single */}
// 		            </div>{/* /.col-md-6 */}
// 		            <div className="col-md-6">
// 		              <div className="service-two__single js-tilt">
// 		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
// 		                {/* /.service-two__single-image */}
// 		                <div className="service-two__single-inner">
// 		                  <i className="fal fa-chart-network" />
// 		                  <h3><Link to="/service-details">Digital Integration</Link></h3>
// 		                  <p>Social Media</p>
// 		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
// 		                  {/* /.service-two__link */}
// 		                </div>{/* /.service-two__single-inner */}
// 		              </div>{/* /.service-two__single */}
// 		            </div>{/* /.col-md-6 */}
// 		          </div>{/* /.row */}
// 		        </div>{/* /.service-two__box-wrap */}
// 		      </div>{/* /.col-lg-7 */}

// 		      {/* <div className="col-lg-5">
// 		        <div className="service-two__block">
		          
// 		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiumod temor incididunt ut labore et
// 		            dolore magna aliqua. Ut enim ad veniam quis nostrud exercitation ullamco laboris nisi </p>
// 		          <ul className="list-unstyled video-one__list">
// 		            <li>
// 		              <i className="far fa-check" />
// 		              Smashing Book 6 Is Here New Frontiers In Web Design
// 		            </li>
// 		            <li>
// 		              <i className="far fa-check" />
// 		              Introduction To Animation And The iMessage App Store With Shruggie
// 		            </li>
// 		            <li>
// 		              <i className="far fa-check" />
// 		              Get Your Mobile Site Ready For The 2018 Holiday ways goods
// 		            </li>
// 		            <li>
// 		              <i className="far fa-check" />
// 		              Making Distributed Product Teams Work More Efficiently other
// 		            </li>
// 		          </ul>
// 		        </div>
// 		      </div> */}

// 		    </div>
// 		  </div>
// 		</section>

//         }
// }

// export default ServiceV5


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Popup extends Component {
  render() {
    const { service, onClose } = this.props;

    if (!service) {
      return null;
    }

    return (
      <div className="popup-overlay show">
        <div className="popup show">
          <div className="popup-inner">
            <button className="close-btn" onClick={onClose}>&times;</button>
            <h3>{service.title}</h3>
            <div>{service.fullDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}

class ServiceV5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedService: null,
    };
    this.handleServiceClick = this.handleServiceClick.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  handleServiceClick(service) {
    this.setState({ selectedService: service });
  }

  closePopup() {
    this.setState({ selectedService: null });
  }

  render() {
    const services = [
      {
        title: 'Outdoor BTL Services',
        description: 'Billboards and Hoardings, Transit Advertising, Street Furniture, Ambient Advertising, Event Sponsorships',
        fullDescription: (
          <div>
            <ul>

              <li>
              <h5>Billboards and Hoardings</h5>
                <ul>
                  <li>Strategic Placement: Identifying high-traffic locations for maximum visibility.</li>
                  <li>Creative Design: Designing eye-catching and impactful billboards that convey the brand message effectively. </li>
                  <li>Installation and Maintenance: Ensuring high-quality installation and regular maintenance to keep the billboards in perfect condition.</li>
                </ul>
              </li>

              <li>
              <h5>Transit Advertising</h5>
              <ul>
                      <li>Bus and Train Wraps: Full or partial vehicle wraps that turn public transportation into mobile billboards.</li>
                      <li>Station Advertising: Posters, banners, and digital displays in train and bus stations to reach commuters.</li>
                      <li>Taxi and Auto Rickshaw Ads: Ads on taxis and auto rickshaws for wide urban coverage.</li>
                    </ul>
              </li>

              <li>
              <h5>Street Furniture</h5>
              <ul>
                      <li>Bus Shelters: Advertising on bus shelters to capture the attention of waiting commuters.</li>
                      <li>Kiosks and Booths: Temporary structures for promotional activities and direct interaction with the public.</li>
                      <li>Public Benches and Waste Bins: Ads on public amenities for sustained visibility.</li>
                    </ul>
              </li>

              <li>
                <h5>Ambient Advertising</h5>
              <ul>
                      <li>Guerrilla Marketing: Innovative and unconventional methods to create memorable brand experiences in public spaces.</li>
                      <li>Building Wraps: Large-scale advertisements that cover entire buildings, making a strong visual impact.</li>
                      <li>3D Installations: Eye-catching 3D structures in high-footfall areas to engage passersby.</li>
                    </ul>
              </li>

              <li>
                <h5>Event Sponsorships</h5>
                <ul>
                      <li>Branding at Sports Events: Sponsoring sports events and placing advertisements in stadiums and sports venues.</li>
                      <li>Festivals and Concerts: Sponsorship and branding at cultural festivals, concerts, and public gatherings.</li>
                      <li>Community Events: Partnering with local events to promote the brand and engage with the community.</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
        icon: 'fal fa-hand-holding-usd',
        img : 'BTL service outdoor airtel billboard.png'
      },

      {
        title: 'Indoor BTL Services',
        description: 'Point of Sale (POS) Advertising, In-Store Promotions, Trade Shows and Exhibitions, Mall Advertising, Cinema Advertising',
        fullDescription: (
          <div>
            <ul>

              <li>
              <h5>Point of Sale (POS) Advertising </h5>
                <ul>
                  <li>Counter Displays: Eye-catching displays placed at retail counters to influence purchase decisions.</li>
                      <li>Shelf Talkers and Wobblers: Small signs attached to shelves to draw attention to specific products.</li>
                      <li>Digital Signage: Interactive screens and displays inside stores for dynamic advertising.</li>
                </ul>
              </li>

              <li>
              <h5>In-Store Promotions</h5>
              <ul>
              <li>Product Demonstrations: Live demonstrations to showcase product features and benefits.</li>
                      <li>Sampling Campaigns: Offering free samples to customers to encourage trial and purchase.</li>
                      <li>In-Store Contests and Sweepstakes: Engaging customers with contests and offering prizes to boost participation.</li>
                    </ul>
              </li>

              <li>
              <h5>Trade Shows and Exhibitions </h5>
              <ul>
              <li>Custom Booth Design: Designing and building customized exhibition booths to attract visitors.</li>
                      <li>Interactive Displays: Using technology and interactive elements to engage visitors at trade shows.</li>
                      <li>Promotional Materials: Creating brochures, flyers, and other materials to support trade show presence.</li>
                    </ul>
              </li>

              <li>
                <h5>Mall Advertising </h5>
              <ul>
              <li>Digital and Static Displays: Advertising on screens and static displays in malls to reach shoppers.</li>
                      <li>Promotional Stalls: Setting up promotional stalls in malls to directly interact with customers.</li>
                      <li>Event Sponsorships: Sponsoring events and activities within malls to increase brand visibility.</li>
                    </ul>
              </li>

              <li>
                <h5> Cinema Advertising</h5>
                <ul>
                <li>On-Screen Ads: Advertising before movie screenings to capture the attention of cinema-goers.</li>
                      <li>Lobby Displays: Banners, posters, and digital screens in cinema lobbies to engage audiences before and after movies.</li>
                      <li>Experiential Marketing: Creating immersive brand experiences within cinema complexes.</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
        icon: 'fal fa-umbrella-beach',
        img: 'BTL service indoor vivo dangler.png'
      },
      {
        title: 'Integrated BTL Campaigns',
        description: 'Cross-Promotions, Experiential Marketing, Loyalty Programs',
        fullDescription: (
          <div>
            <ul>

              <li>
              <h5>Cross Promotions</h5>
                <ul>
                <li>Collaborative Campaigns: Partnering with complementary brands for joint promotions and cross-marketing.</li>
                <li>Multi-Channel Integration: Combining outdoor and indoor BTL activities for a cohesive campaign strategy.</li>
                </ul>
              </li>

              <li>
              <h5>Experiential Marketing </h5>
              <ul>
              <li>Pop-Up Stores and Activations: Temporary retail spaces and interactive experiences to engage consumers directly.</li>
                      <li>Roadshows: Traveling events and mobile promotions to reach audiences in different locations.</li>
                      <li>Sampling Programs: Distributing product samples in strategic locations to generate buzz and encourage trials.</li>
                    </ul>
              </li>

              <li>
              <h5>Loyalty Programs </h5>
              <ul>
              <li>Customer Engagement: Creating loyalty programs to reward repeat customers and build long-term relationships.</li>
              <li>Interactive Campaigns: Using gamification and interactive elements to engage and retain customers.</li>
                    </ul>
              </li>

            </ul>
          </div>
        ),
        icon: 'fal fa-paper-plane',
        img : 'integrated BTL campaign_social media1.png'
      },
      {
        title: 'Digital Integration',
        description: 'Social Media',
        fullDescription: (
          <div>
            <ul>

              <li>
              <h5>Social Media</h5>
                <ul>
                <li>Social Media Campaigns: Running targeted campaigns on platforms like Facebook, Instagram, and Twitter.</li>
                      <li>Influencer Collaborations: Partnering with influencers to amplify brand messages and reach a wider audience.</li>
                      <li>User-Generated Content: Encouraging customers to create and share content related to the brand.</li>
                </ul>
              </li>

              
            </ul>
          </div>
        ),
        icon: 'fal fa-chart-network',
        img : 'digital integrated_social media.png'
      },
    ];

    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <section className="service-two service-two__service-page go-top" style={{ marginBottom: '-50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="block-title-two text-left">
                <p>Our Services</p>
                <h3>We Offer Exclusive <br /> Service For You</h3>
              </div>
              <div className="service-two__box-wrap">
                <div className="row">
                  {services.map((service, index) => (
                    <div key={index} className="col-md-6">
                      <div className="service-two__single js-tilt">
                        <div 
                        className="service-two__single-image"
                          style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/${service.img})` }}
                          
                        />
                        <div className="service-two__single-inner">
                          <i className={service.icon} />
                          <h3><Link to="/service-details">{service.title}</Link></h3>
                          <p>{service.description}</p>
                          <button onClick={() => this.handleServiceClick(service)} className="service-two__link">
                            <i className="fa fa-long-arrow-alt-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {this.state.selectedService && (
            <Popup
              service={this.state.selectedService}
              onClose={this.closePopup}
            />
          )}
        </div>
      </section>
    );
  }
}

export default ServiceV5;


