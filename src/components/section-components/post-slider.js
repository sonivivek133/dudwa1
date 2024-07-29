import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PostSlider extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="blog-one ">
		  <div className="container-fluid">
		    <div className="blog-one__left">
		      <div className="block-title text-left">
		        <p><span>News & Articles</span></p>
		        <h3>Reads Our Latest <br /> News &amp; Blog</h3>
		        <div className="block-title__line" />{/* /.block-title__line */}
		      </div>{/* /.block-title */}
		      <p>Stay informed with our latest updates! From breaking news and in-depth analyses to inspiring stories and expert insights, our News & Blog section brings you the most relevant information. Join us as we explore the topics that matter most to you. </p>
		      <div className="blog-one__carousel-btn__wrap">
		        <a href="#" className="blog-one__carousel-btn-left"><i className="fa fa-angle-double-left" /></a>
		        <a href="#" className="blog-one__carousel-btn-right"><i className="fa fa-angle-double-right" /></a>
		      </div>{/* /.blog-one__carousel-btn__wrap */}
		    </div>{/* /.blog-one__left */}
		    <div className="blog-one__right  go-top">
		      <div className="blog-one__carousel owl-carousel owl-theme thm__owl-carousel" data-carousel-prev-btn=".blog-one__carousel-btn-left" data-carousel-next-btn=".blog-one__carousel-btn-right" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;stagePadding&quot;: 0, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1 }, &quot;991&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
		        <div className="item">
		          <div className="blog-one__single">
		            <div className="blog-one__image">
		              <img src={publicUrl+"assets/images/blog/news1.5@100x-100.jpg"} alt={ imagealt } />
		            </div>{/* /.blog-one__image */}
		            <div className="blog-one__content">
		              <div className="blog-one__author">
		                {/* <img src={publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } /> */}
		                <p>Vaibhav Singh</p>
		              </div>{/* /.blog-one__author */}
		              <h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress The Authoring Expeene Compared</Link></h3>
		              <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
		            </div>{/* /.blog-one__content */}
		          </div>{/* /.blog-one__single */}
		        </div>{/* /.item */}
		        <div className="item">
		          <div className="blog-one__single">
		            <div className="blog-one__image">
		              <img src={publicUrl+"assets/images/blog/news2.5@100x-100.jpg"} alt={ imagealt } />
		            </div>{/* /.blog-one__image */}
		            <div className="blog-one__content">
		              <div className="blog-one__author">
		                {/* <img src={publicUrl+"assets/images/blog/blog-author-1-2.jpg"} alt={ imagealt } /> */}
		                <p>Vaihav Singh</p>
		              </div>{/* /.blog-one__author */}
		              <h3><Link to="/blog-details">Understanding API Based form
		                  Guide For Product Managers Are Programs Ways</Link></h3>
		              <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
		            </div>{/* /.blog-one__content */}
		          </div>{/* /.blog-one__single */}
		        </div>{/* /.item */}
		        <div className="item">
		          <div className="blog-one__single">
		            <div className="blog-one__image">
		              <img src={publicUrl+"assets/images/blog/news3.5@100x-100.jpg"} alt={ imagealt } />
		            </div>{/* /.blog-one__image */}
		            <div className="blog-one__content">
		              <div className="blog-one__author">
		                {/* <img src={publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } /> */}
		                <p>Vaibhav Singh</p>
		              </div>{/* /.blog-one__author */}
		              <h3><Link to="/blog-details">Monthly Web Development
		                  Update Rethinking Habits And Finding Custom Solutions</Link></h3>
		              <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
		            </div>{/* /.blog-one__content */}
		          </div>{/* /.blog-one__single */}
		        </div>{/* /.item */}
		        <div className="item">
		          <div className="blog-one__single">
		            <div className="blog-one__image">
		              <img src={publicUrl+"assets/images/blog/news4.5@100x-100.jpg"} alt={ imagealt } />
		            </div>{/* /.blog-one__image */}
		            <div className="blog-one__content">
		              <div className="blog-one__author">
		                {/* <img src={publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } /> */}
		                <p>Vaibhav Singh</p>
		              </div>{/* /.blog-one__author */}
		              <h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress The Authoring Expeene Compared</Link></h3>
		              <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
		            </div>{/* /.blog-one__content */}
		          </div>{/* /.blog-one__single */}
		        </div>{/* /.item */}
		        <div className="item">
		          <div className="blog-one__single">
		            <div className="blog-one__image">
		              <img src={publicUrl+"assets/images/blog/news5.5@100x-100.jpg"} alt={ imagealt } />
		            </div>{/* /.blog-one__image */}
		            <div className="blog-one__content">
		              <div className="blog-one__author">
		                {/* <img src={publicUrl+"assets/images/blog/blog-author-1-2.jpg"} alt={ imagealt } /> */}
		                <p>Vaibhav Singh</p>
		              </div>{/* /.blog-one__author */}
		              <h3><Link to="/blog-details">Understanding API Based form
		                  Guide For Product Managers Are
		                  Programs Ways</Link></h3>
		              <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
		            </div>{/* /.blog-one__content */}
		          </div>{/* /.blog-one__single */}
		        </div>{/* /.item */}
		        <div className="item">
		          <div className="blog-one__single">
		            <div className="blog-one__image">
		              <img src={publicUrl+"assets/images/blog/news6.5@100x-100.jpg"} alt={ imagealt } />
		            </div>{/* /.blog-one__image */}
		            <div className="blog-one__content">
		              <div className="blog-one__author">
		                {/* <img src={publicUrl+"assets/images/blog/blog-author-1-1.jpg"} alt={ imagealt } /> */}
		                <p>Vaibhav Singh</p>
		              </div>{/* /.blog-one__author */}
		              <h3><Link to="/blog-details">Monthly Web Development
		                  Update Rethinking Habits And Finding Custom Solutions</Link></h3>
		              <Link to="/blog-details" className="thm-btn blog-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
		            </div>{/* /.blog-one__content */}
		          </div>{/* /.blog-one__single */}
		        </div>{/* /.item */}
		      </div>{/* /.blog-one__carousel owl-carousel owl-theme thm__owl-carousel */}
		    </div>{/* /.blog-one__right */}
		  </div>{/* /.container-fluid */}
		</section>


        }
}

export default PostSlider