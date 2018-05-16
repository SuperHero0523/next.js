import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Index extends React.Component {
  renderSlide = index => {
    const i = index + 1;
    return (
      <div key={i}>
        <img src={`https://picsum.photos/420/320?image=${i}`} />
        <h3>{i}</h3>
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
        <Slider
          autoplay={false}
          initialSlide={1}
          slidesToShow={3}
          slidesToScroll={3}
          infinite={true}
          dots={true}
          responsive={[
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
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
