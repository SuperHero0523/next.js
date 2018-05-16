import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './style.css';

class Index extends React.Component {
  renderSlide = index => {
    const i = index + 1;
    const imageUrl = `http://via.placeholder.com/350x150?text=${i}`;
    return (
      <div key={i}>
        <figure>
          <img src={imageUrl} />
          <figcaption>
            <p>Legend of item {i}</p>
          </figcaption>
        </figure>
      </div>
    );
  };
  renderSlides = () => {
    return [...Array(9).keys()].map(this.renderSlide);
  };
  render() {
    return (
      <div>
        <h2>This is react-slider X next.js</h2>
        <p>
          There is a bug when using responsive settings: look at image src
          attribute when screen is smaller that 768px
        </p>
        <Slider
          autoplay={false}
          initialSlide={1}
          slidesToShow={3}
          slidesToScroll={3}
          infinite={true}
          dots={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          {this.renderSlides()}
        </Slider>
      </div>
    );
  }
}

export default Index;
