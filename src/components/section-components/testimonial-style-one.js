import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialOne extends Component {

	    componentDidMount() {

	    const $ = window.$;
	    
	        if($('.js-tilt').length) {
		        $('.js-tilt').tilt({
		            maxTilt: 20,
		            perspective:700, 
		            glare: true,
		            maxGlare: .3
		        })
		    }

		    if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
	  }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="testimonials-one" >
			  <div className="container">
			    <div className="testimonials-one__top">
			      <div className="block-title text-left">
			        <p><span>Our Journey</span></p>
			        <h3>know Everything About Our <br /> Professional Journey</h3>
			        <div className="block-title__line" />{/* /.block-title__line */}
			      </div>{/* /.block-title */}
			      <div className="testimonials-one__carousel-btn__wrap">
			        <a href="#" className="testimonials-one__carousel-btn-left"><i className="fa fa-angle-double-left" /></a>
			        <a href="#" className="testimonials-one__carousel-btn-right"><i className="fa fa-angle-double-right" /></a>
			      </div>{/* /.testimonials-one__carousel-btn__wrap */}
			    </div>{/* /.testimonials-one__top */}
			    <div className="testimonials-one__arrow-decor-wrap">
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			    </div>{/* /.testimonials-one__arrow-decor-wrap */}
			    <div className="testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme" data-carousel-prev-btn=".testimonials-one__carousel-btn-left" data-carousel-next-btn=".testimonials-one__carousel-btn-right" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 65, &quot;stagePadding&quot;: 50, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 20 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2000.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Established with a strong focus on direct and impactful marketing strategies, both outdoor and indoor campaigns.</p>
			            {/* <h3>Pearl Campbell</h3> */}
			            {/* <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2003.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Based in Patna, Bihar, with a comprehensive in-house setup of state-of-the-art machines for diverse branding activities.</p>
			            {/* <h3>Landon Anderson</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2006.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Led by an experienced owner, active since 2000, with expertise in various display products and campaigns.</p>
			            {/* <h3>Daniel Howell</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2009.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Specializes in diverse media, including hoardings, LED screens, and vinyls, for customized branding solutions.</p>
			            {/* <h3>Jay Houston</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2012.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Worked with corporate brands like Airtel, Idea, and political parties, providing comprehensive branding services.</p>
			            {/* <h3>Austin Houston</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2015.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Centralized vendor for a wide range of branding activities for Jansuraj - Prashant Kishore across Bihar state.</p>
			            {/* <h3>Myrtie Wise</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2018.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Equipped with advanced printing and fabrication machinery, including HP Latex and I3200 Print Head.</p>
			            {/* <h3>Ronald Sharp</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2021.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Comprises graphic designers, machine operators, welders, and client service executives to deliver quality services.</p>
			            {/* <h3>Sophia Zimmerman</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/2024.png"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Offers outdoor and indoor BTL services, experiential marketing, trade show displays, and digital integration.</p>
			            {/* <h3>Chester Ortiz</h3>
			            <span>CEO &amp; Founder</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" /> */}
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme */}
			  </div>{/* /.container */}
			</section>
			  

        }
}

export default TestimonialOne