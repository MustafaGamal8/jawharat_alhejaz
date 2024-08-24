import { t } from 'i18next';
import React from 'react';

const services = [
  {
    name: 'دريسينج مغلق',
    imageSrc: 'images/d1.jpg',
  },
  {
    name: 'دريسنج مفتوح',
    imageSrc: 'images/d2.jpg',
  },
];

export default function Section3() {
  return (
    <>
      {/* Section 3 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-3">
        <div className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className="block-heading__title">{t('Dressing Rooms')}</h4>
            <div className="block-heading__subtitle">
              {t('Discover our range of top-notch services designed to meet your needs.')}
            </div>
          </div>
        </div>
        <div className="atbs-block__inner padding-left-container padding-right-container">
          <div className="section-main">
            <div className="img-field" data-height={580}>
              <img src="images/d2.jpg" alt="Kitchens" />
            </div>
          </div>
          <div className="section-sub">
            <div className="services-list flex-box flex-box-4i">
              {services.map((service, index) => (
                <div key={index} className="list-item">
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
        </div>
      </div>
    </>
  );
}
