import React from "react";
import Slider from "react-slick";
import './Testimonial.scss';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const settingsTestimonial = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function Testimonial() {
  return (
    <div className="testimonials">
      <Slider {...settingsTestimonial}>
        <div className="slider-package">
          <div className="testimonial row">
            <div className="testimonial-video">
              <div className="video-modal">
                <div className="modal-image">
                  <img
                    src="./images/Home/testimonial-video-still-lavender.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <h5 className="content-title">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="content-logo">
                  <img
                    src="/images/Home/lavender-logo-x2.89c5e2e.png"
                    alt="logo"
                    loading="lazy"
                  />
                </span>
              </h5>
              <blockquote className="content-domaine">
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="slider-package">
          <div className="testimonial row">
            <div className="testimonial-video">
              <div className="video-modal">
                <div className="modal-image">
                  <img
                    src="./images/Home/testimonial-video-still-lavender.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <h5 className="content-title">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="content-logo">
                  <img
                    src="/images/Home/lavender-logo-x2.89c5e2e.png"
                    alt="logo"
                    loading="lazy"
                  />
                </span>
              </h5>
              <blockquote className="content-domaine">
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
