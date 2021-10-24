import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
    
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1599669454699-248893623440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="headphone"/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"alt="headset"/>
          </div>
          <div>
            <img src="https://specials-images.forbesimg.com/imageserve/5e8ce586748506000636107e/Beats-Studio3-Wireless-Noise-Cancelling-On-Ear-Headphones/960x0.jpg?fit=scale"alt="earphone"/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1599669454699-248893623440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="earset"/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"alt="headset"/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"alt="headset"/>
          </div>
        </Slider>
      </div>
    );
  }
}



