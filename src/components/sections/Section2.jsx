import { t } from 'i18next';
import React from 'react';

export default function Section2() {
  return (
    <>
      {/* Section 2 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-2">
        <div className="container-fullwidth">
          <div className="atbs-block__inner flex-box">
            <div className="section-main">
              <div className="block-heading block-heading_style-1">
                <h4 className="block-heading__title">{t('About Us')}</h4>
                <div className="block-heading__subtitle">
                  {t('We are a leading company providing exceptional kitchen designs and accessories.')}
                </div>
              </div>
              <div className="img-field" data-height={250}>
                <img src="images/k2.jpg" alt="About Us" />
              </div>
            </div>
            <div className="section-sub flex-box flex-box-2i flex-space-40"  style={{margin:"10px"}}>
              <div className="column-left">
                <div className="img-field m-b-30" data-height={390}>
                  <img src="images/k3.jpg" alt="Company Image 1" />
                </div>
                <div className="paragraph-text">
                  <p>{t('We offer top-quality kitchen solutions tailored to your needs, ensuring both style and functionality. Our team is dedicated to providing the best service and products to make your kitchen exceptional.')}</p>
                </div>
              </div>
              <div className="column-right">
                <div className="img-field" data-height={390}>
                  <img src="images/k4.jpg" alt="Company Image 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
