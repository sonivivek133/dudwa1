import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
		  <section className="contact-two">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-5">
		          <div className="contact-two__content">
		            <div className="contact-two__block">
		              <h3>Don't Hesitate To Contact Us</h3>
		              <p>Discover New Idea To Build Your Business. We are professional & Experienced Advertising Agency Dudwa</p>
		            </div>{/* /.contact-two__block */}
		            <ul className="list-unstyled contact-two__info-list">
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-map-marked" />
		                  Address :
		                </div>{/* /.contact-two__info-list-title */}
		                <p> 112, Gandhi Nagar, West Boring Canal Road, Patna - 800001, Bihar, India</p>
		              </li>
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-phone" />
		                  Call Us :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><a href="tel:+8935000888">+8935000888</a></p>
		              </li>
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-envelope" />
		                  Email Us :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><a href="mailto:info@dudwa.com">info@dudwa.com</a></p>
		              </li>
		            </ul>{/* /.contact-two__info-list */}
		          </div>{/* /.contact-two__content */}
		        </div>{/* /.col-lg-5 */}
		        <div className="col-lg-7">
		          <form action="#" className="contact-two__form">
		            <div className="contact-two__block">
		              <h3>Get In Touch</h3>
		              <p>Fill this form and send us message</p>
		            </div>{/* /.contact-two__block */}
		            <div className="row">
		              <div className="col-md-6">
		                <input type="text" placeholder="Full Name" />
		              </div>{/* /.col-md-6 */}
		              <div className="col-md-6">
		                <input type="text" placeholder="Email Address" />
		              </div>{/* /.col-md-6 */}
		              <div className="col-md-12">
		                <input type="text" placeholder="Subject" />
		              </div>{/* /.col-md-12 */}
		              <div className="col-md-12">
		                <textarea name="message" placeholder="Message" defaultValue={""} />
		                <button type="submit" className="thm-btn contact-two__btn">Send Message <i className="fa fa-angle-double-right" /></button>{/* /.thm-btn contact-two__btn */}
		              </div>{/* /.col-md-12 */}
		            </div>{/* /.row */}
		          </form>{/* /.contact-two__form */}
		        </div>{/* /.col-lg-7 */}
		      </div>{/* /.row */}
		    </div>{/* /.container */}
		  </section>{/* /.contact-two */}
		  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14338.656393025877!2d85.0985282!3d25.6097594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed587a8b207e97%3A0x5dc2601912075f3d!2s112%2C%20Gandhi%20Nagar%2C%20West%20Boring%20Canal%20Road%2C%20Patna%2C%20Bihar%20800001%2C%20India!5e0!3m2!1sen!2sus!4v1696323651354!5m2!1sen!2sus" className="google-map__contact" allowFullScreen />
		</div>

        }
}

export default Contact