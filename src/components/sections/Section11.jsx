import { t } from 'i18next';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section11() {
  const { ref, inView } = useInView()
  return (
    <>
      {/* Section 2 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-2">
        <div className="container-fullwidth">
          <div ref={ref} className="atbs-block__inner flex-box">
            <div className="section-main">
              <div className="block-heading block-heading_style-1">
                <h4 className={`block-heading__title  animate__animated   ${inView ? 'animate__fadeInUp' : ''}`}>{t('Logo')}</h4>
                <div className={`block-heading__subtitle  animate__animated   ${inView ? 'animate__fadeInUp ' : ''}`}>
                  {t(`From the heritage of the Kingdom of Saudi Arabia in the works of decoration in old houses and architectural art, the triangle shape and its formation were a large part of the heritage of Saudi Arabia and its old houses. We used the idea of the triangle to form the jewel and the letter Jim for the word Jewel and also the letter Ha for the word Hijaz after deleting the dot to give an impression of heritage and authenticity and preserving the Saudi identity and the meaning is permanent in our designs, which gives the impression that we care about the small details and preserve the Saudi identity`)}
                </div>
              </div>
              <div className={`img-field animate__animated   ${inView ? 'animate__fadeInUp' : ''}`} data-height={250}>
                <img src="images/logo/4.png" alt="About Us" />
              </div>
            </div>
            <div className="section-sub flex-box flex-box-2i flex-space-40"  style={{margin:"10px"}}>
              <div className="column-left">
                <div className={`img-field m-b-30 animate__animated   ${inView ? 'animate__fadeInUp' : ''}`} data-height={390}>
                  <img src="images/logo/1.png" alt="Company Image 1" />
                </div>
              </div>
              <div className="column-right">
                <div className={`img-field  animate__animated   ${inView ? 'animate__fadeInUp' : 'animate__delay-1s'}`} data-height={390}>
                  <img src="images/logo/2.png" alt="Company Image 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
