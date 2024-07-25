import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''

    return  <section className={"testimonials-two "+CustomClass} style={{marginTop :'-130px'}}>
			  <div className="container">
			    <div className="block-title-two text-center">
			      <p>our testimonials</p>
			      <h3>What Our Client’s <br /> Say About Us</h3>
			    </div>{/* /.block-title-two */}
			    <div className="testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;stagePadding&quot;: 0, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 0 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Jessica H</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Dudwa's creativity and attention to detail have made a tremendous impact on our marketing efforts.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>David L</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Thanks to Dudwa, our ad campaigns are now more targeted and effective. We've seen a noticeable increase in engagement.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-3.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Payal Jain</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>We couldn't be happier with the results from Dudwa. Their expertise in digital marketing is top-notch.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Atharwa Kumar</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Dudwa's innovative ideas and excellent execution have helped us reach a wider audience.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Shushma Pathak</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>The campaigns designed by Dudwa have given us a competitive edge in our industry. Highly recommend their services!</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src="assets/images/testimonials/testimonial-2-3.jpg" alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Priya Tripathi</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Our collaboration with Dudwa has been incredibly fruitful. Their team is responsive and results-driven.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Raman</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Dudwa exceeded our expectations with their innovative ad campaigns. Our brand visibility has skyrocketed!</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Samantha R.</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Working with Dudwa was a game-changer. Their strategic approach and creative solutions delivered outstanding results</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-3.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Michael T.</h3>
			              {/* <span>CEO &amp; Founder</span> */}
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>The team at Dudwa is professional and dedicated. Their advertising strategies have significantly boosted our sales.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme */}
			  </div>{/* /.container */}
			</section>

			 
        }
}

export default TestimonialV2