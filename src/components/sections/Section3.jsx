import { t } from 'i18next';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'دريسينج مغلق',
    imageSrc: 'images/dressing/2.jpg',
  },
  {
    name: 'دريسنج مفتوح',
    imageSrc: 'images/dressing/3.jpg',
  },
];

export default function Section3() {
  const [ref, inView] = useInView();
  return (
    <>
      {/* Section 3 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-3">
        <div className="container-fullwidth">
          <div className={`block-heading block-heading_style-1 block-heading--center ${inView ? 'animate__animated animate__fadeInUp' : ''}`}>
            <h4 className="block-heading__title">{t('Dressing Rooms')}</h4>
            <div className="block-heading__subtitle">
              {t('The dressing room has all the practical and elegant designs you need.')}
            </div>
          </div>
        </div>
        <div className="atbs-block__inner padding-left-container padding-right-container">
          <div className="section-main">
            <div className="img-field" data-height={580}>
              <img src="images/dressing/1.jpg" alt="Kitchens" />
            </div>
          </div>
          <div className="section-sub">
            <div className="services-list flex-box flex-box-4i">
              {services.map((service, index) => (
                <div key={index} className={`animate__animated ${inView ? 'animate__fadeInUp' : ''}`} >
                  <div className="service-card">
                    <h3 className="service__name">{service.name}</h3>
                    <div className="service__image object-fit">
                      <img src={service.imageSrc} alt={service.altText} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Link to="/dressing" className={`p-2 rounded bg-primary   text-white flex items-center justify-center  w-[200px] mx-auto my-14 hover:bg-secondary transition-all hover:text-white ${inView ? 'animate__animated animate__fadeInUp' : ''}`}>{t('View All Dressing Rooms')}</Link>
        </div>
      </div>
    </>
  );
}
