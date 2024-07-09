import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-two service-two__service-page  go-top" style={{marginBottom:'-50px'}}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-5">
		        <div className="service-two__block">
		          <div className="block-title-two text-left">
		            <p>Our Services</p>
		            <h3>We Offer Exclusive <br /> Service For You</h3>
		          </div>{/* /.block-title-two */}
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiumod temor incididunt ut labore et
		            dolore magna aliqua. Ut enim ad veniam quis nostrud exercitation ullamco laboris nisi </p>
		          <ul className="list-unstyled video-one__list">
		            <li>
		              <i className="far fa-check" />
		              Smashing Book 6 Is Here New Frontiers In Web Design
		            </li>
		            <li>
		              <i className="far fa-check" />
		              Introduction To Animation And The iMessage App Store With Shruggie
		            </li>
		            <li>
		              <i className="far fa-check" />
		              Get Your Mobile Site Ready For The 2018 Holiday ways goods
		            </li>
		            <li>
		              <i className="far fa-check" />
		              Making Distributed Product Teams Work More Efficiently other
		            </li>
		          </ul>{/* /.list-unstyled video-one__list */}
		          {/* <Link to="/service-v2" className="thm-btn">View More <i className="fa fa-angle-double-right" /></Link> */}
		          {/* /.thm-btn */}
		        </div>{/* /.service-two__block */}
		      </div>{/* /.col-lg-5 */}
		      <div className="col-lg-7">
		        <div className="service-two__box-wrap">
		          <div className="row">
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-hand-holding-usd" />
		                  <h3><Link to="/service-details">Outdoor BTL Services</Link></h3>
		                  <p>Billboards and Hoardings, Transit Advertising, Street Furniture, Ambient Advertising, Event Sponsorships</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-umbrella-beach" />
		                  <h3><Link to="/service-details">Indoor BTL Services</Link></h3>
		                  <p>Point of Sale (POS) Advertising, In-Store Promotions, Trade Shows and Exhibitions, Mall Advertising, Cinema Advertising </p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-paper-plane" />
		                  <h3><Link to="/service-details">Integrated BTL Campaigns</Link></h3>
		                  <p>Cross-Promotions, Experiential Marketing, Loyalty Programs</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-chart-network" />
		                  <h3><Link to="/service-details">Digital Integration</Link></h3>
		                  <p>Social Media</p>
		                  <Link to="/service-details" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		          </div>{/* /.row */}
		        </div>{/* /.service-two__box-wrap */}
		      </div>{/* /.col-lg-7 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default ServiceV5