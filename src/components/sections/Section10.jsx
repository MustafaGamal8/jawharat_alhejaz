import { t } from 'i18next';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Slider from '../slider/Slider';

const images = [
  {
    src: 'images/media/1.jpg',
  },
  {
    src: 'images/media/2.jpg',
  },
  {
    src: 'images/media/3.jpg',
  },
  {
    src: 'images/media/4.jpg',
  },
  {
    src: 'images/media/5.jpg',
  },
  {
    src: 'images/media/6.jpg',
  },
  {
    src: 'images/media/7.jpg',
  },
];


export default function Section10() {

  const { ref, inView } = useInView()
  return (
    <>
      {/* Section 8 */}
      <div className="atbs-block atbs-block--fullwidth atbs-posts-listing--grid-1 bg-secondary bg-opacity-5 p-2">
        <div ref={ref} className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className={`block-heading__title animate__animated ${inView ? 'animate__fadeInUp' : ''}`}>{t('Advertising and publicity')}</h4>
          </div>
        </div>
        <div className="w-full ">
          <div className="atbs-block__inner w-full">
            <div className=" w-[80%]  md:w-[50%] mx-auto   my-10">
              <Slider>
                {images.map((image, index) => (
                  <div className="group relative w-full h-[400px]" key={index}>
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 "
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
