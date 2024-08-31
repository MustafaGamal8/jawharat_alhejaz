import { t } from 'i18next';
import React from 'react';

const testimonials = [
  {
    name: 'أحمد .م',
    text: `One of the best companies I have dealt with. Excellent service and speed of implementation.`
  },
  {
    name: 'فاطمة .ع',
    text: `The products are really high quality and reasonable prices. The staff is very professional and cooperative.`
  },
  {
    name: 'خالد .س',
    text: `My experience with Jawharat Al Hijaz was wonderful from start to finish. Thank you.`
  },
];

export default function Section7() {
  return (
    <>
      {/* Section 7 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-7">
        <div className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className="block-heading__title">{t('What People Say')}</h4>
            <div className="block-heading__subtitle">
              {t('At Jawharat Al Hijaz, our customers’ satisfaction is our top priority. Here is some of what our customers say about us:')}
            </div>
          </div>
        </div>
        <div className="container-fullwidth">
          <div className="atbs-block__inner">
            <div className="testimonial-list flex-box flex-box-3i">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="list-item">
                  <div className="testimonial-card" style={{textAlign: 'center'}}>
                    <div className="paragraph-text">
                      <p>{t(testimonial.text)}</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="testimonial__text">
                        <h5 className="testimonial__name">{testimonial.name}</h5>
                      </div>
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
