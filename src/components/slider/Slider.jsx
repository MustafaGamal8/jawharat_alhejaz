import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider({ children }) {
  return (
    <>
      <Swiper navigation={true} loop={true} autoplay={true} modules={[Navigation]} className="mySwiper">
        {React.Children.map(children, (child, index) => (
          <SwiperSlide className=' select-none' key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
