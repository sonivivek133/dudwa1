import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="service-two service-two__service-page service-two__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="service-two__image">
			          <img src={publicUrl+"assets/images/resources/about-page-moc-1.png"} alt={ imagealt } />
			        </div>{/* /.service-two__image */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-two__block">
			          <div className="block-title-two text-left">
			            <p>about us</p>
			            <h3>Exclusive Agency To <br /> Provide Solution</h3>
			          </div>{/* /.block-title-two */}
			          <p>We Introduce Ourselves as Advertisers Engage in Outdoor & Indoor BTL Activity based at Patna, Our operations are in the State of Bihar. We have our own Set up with different Type of machines and fabrication unit to complete the Branding Activities. </p>
			          <ul className="list-unstyled video-one__list">
			            {/* <li>
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
			            </li> */}

     The Owner of the Company is into this business since Year2000, has Completed many campaigns for different Corporate Brands Along with Political Parties and Product. His Expertise is in the following Display Products:
    
	<br/>
	<br/>
	 {/* <h3>Media</h3>

    <b>1. Rooftop Hoardings, Unipoles, Wall Wrap, Glass Outdoors, Led Screens, Vehicle Brandings, UV DTF Stickers, Non-Lit Signage / Glowsign Baords, All Types of ACP Signages / Cladding, Flex / Vinyle / Oneway Vision / Clear Film with or Without Lamination, Cut Out And Many more as per your customised requirement…</b> */}
			          </ul>{/* /.list-unstyled video-one__list */}
			          <Link to="/service" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn */}
			        </div>{/* /.service-two__block */}
			      </div>{/* /.col-lg-5 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>



        }
}

export default AboutPage