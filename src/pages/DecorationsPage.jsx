import { t } from 'i18next';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from '../components/slider/Slider';

export default function DecorationsPage() {
  const { ref, inView } = useInView();

  // Array of images
  const images = [
    { src: '/images/decorations/4.jpg', alt: 'Decorations 1' },
    { src: '/images/decorations/5.jpg', alt: 'Decorations 2' },
    { src: '/images/decorations/6.jpg', alt: 'Decorations 3' },
    { src: '/images/decorations/7.jpg', alt: 'Decorations 4' },
    { src: '/images/decorations/8.jpg', alt: 'Decorations 4' },
    { src: '/images/decorations/9.jpg', alt: 'Decorations 4' },
    { src: '/images/decorations/10.jpg', alt: 'Decorations 4' },
    { src: '/images/decorations/11.jpg', alt: 'Decorations 4' },
    { src: '/images/decorations/12.jpg', alt: 'Decorations 4' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          className=" animate__zoomIn animate__animated w-full h-[500px] object-cover"
          src="/images/decorations/8.jpg"
          alt="Hero Decorations"
        />
        <h4
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-xl font-bold text-6xl animate__animated ${
            inView ? 'animate__fadeInUp' : ''
          }`}
        >
          {t('Decorations')}
        </h4>
      </div>

      {/* Image Slider */}
      <div className="w-[80%] mx-auto my-20  p-4">
        <Slider>
          {images.map((image, index) => (
            <div className="group relative w-[800px] h-[400px]" key={index}>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
