import { t } from 'i18next';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from '../components/slider/Slider';

export default function KitchensPage() {
  const { ref, inView } = useInView();

  // Array of images
  const images = [
    { src: '/images/k1.jpg', alt: 'Kitchen 1' },
    { src: '/images/k2.jpg', alt: 'Kitchen 2' },
    { src: '/images/k3.jpg', alt: 'Kitchen 3' },
    { src: '/images/k4.jpg', alt: 'Kitchen 4' },
    { src: '/images/k5.jpg', alt: 'Kitchen 5' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          className=" animate__zoomIn animate__animated w-full h-[500px] object-cover"
          src="/images/k9.jpg"
          alt="Hero Kitchen"
        />
        <h4
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl animate__animated ${
            inView ? 'animate__fadeInUp' : ''
          }`}
        >
          {t('Kitchens')}
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
