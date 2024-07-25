import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleTwo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-two  go-top">
		  <img src={publicUrl+"assets/images/shapes/about-two-bg.png"} alt={ imagealt } className="about-two__bg" />
		  <div className="container">
		    <img src={publicUrl+"assets/images/resources/cta-2-1.png"} alt={ imagealt } className="about-two__moc" />
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="about-two__content">
		          <div className="block-title text-left">
		            <p><span>What We Do</span></p>
		            <h3>We Offer Best Solution <br /> For Your Business</h3>
		            <div className="block-title__line" />{/* /.block-title__line */}
		          </div>{/* /.block-title */}
		          <p>Dudwa is  specializes in creating direct and impactful marketing strategies that reach consumers on a personal level. These strategies include both outdoor and indoor marketing activities, aiming to engage customers through experiential, promotional, and interactive methods.</p>
		          <div className="about-two__box">
		            <div className="about-two__box-icon">
		              
		            </div>{/* /.about-two__box-icon */}
		            
		          </div>{/* /.about-two__box */}
		        </div>{/* /.about-two__content */}
		      </div>{/* /.col-lg-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>


        }
}

export default AboutStyleTwo