import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section style={{marginBottom:'110px'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-two__content">
                <div className="block-title-two text-left">
                  <p>why choose us</p>
                  <h3>Join Us &amp; Get Our <br /> Professional Service</h3>
                </div>{/* /.block-title-two */}
                {/* <div className="accrodion-grp" data-grp-name="faq-two-accrodion"> */}
                  
                  {/* <div className="accrodion active"> */}
                    {/* <div className="accrodion-title">
                      <h4>Web Performance For Third Party Scripts: Smashing</h4>
                    </div> */}
                    {/* <div className="accrodion-content"> */}
                      {/* <div className="inner"> */}
                        <p>Dudwa Concepts excels in delivering direct, impactful marketing strategies tailored to your brand's needs. With over two decades of experience and a comprehensive range of services, we ensure maximum visibility and engagement through innovative outdoor and indoor BTL activities. Our expert team, cutting-edge technology, and strategic approach guarantee effective, memorable campaigns that connect brands with their audience. Trust Dudwa Concepts to elevate your brand's presence and drive business growth. </p>
                      {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}
                  {/* <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>We Are Just Getting Started 1,000 Smashing Members Ways</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What Happens When You Create A Flexbox Flex Container?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae </p>
                      </div>
                    </div>
                  </div> */}
                {/* </div> */}
                <a href="#" className="thm-btn faq-two__btn">Join Us <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn faq-two__btn */}
              </div>{/* /.faq-two__content */}
            </div>{/* /.col-lg-6 */}
            
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="faq-two__image">
                <img src={publicUrl+"assets/images/resources/professional service.png"} alt={ imagealt } />
              </div>{/* /.faq-two__image */}
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>

        }
}

export default FaqV2