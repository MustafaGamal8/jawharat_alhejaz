import { t } from 'i18next';
import React from 'react';

const testimonials = [
  {
    name: 'Hazem elamrety',
    text: ` احسن شركة مطابخ حقيقي واكتر ناس ذوق و ممحترمة ومعاملة فوق الوصف  شكرا ليكم ولأمانتكم وفي نجاح لنجاح دايما `
  },
  {
    name: 'Mina ghaly',
    text: ` بجد اكتر شركة محترمة وكل الفريق متعاون جدا والخامات اعلي حاجة وعندهم صبر وطولة بال انهم يسمعوك ويفهموا دماغك  شكرا جدا ليكم `
  },
  {
    name: 'Ehab reda',
    text: ` شركة محترمة وخامات محترمة وكل العاملين فيها ناس ذوق فعلا واستلمت من اسبوع ماشاء الله المطبخ جميل جدا  بجد تسلم ايديكم `
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
              {t('See what our clients have to say about our work.')}
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
                      <p>{testimonial.text}</p>
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
