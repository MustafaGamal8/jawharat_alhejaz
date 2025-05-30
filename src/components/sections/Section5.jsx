import { t } from 'i18next';
import React from 'react';

export default function Section5() {
  return (
    <>
      {/* Section 5 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-5">
        <div className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className="block-heading__title">{t('Our company.. an ongoing success story!')}</h4>
            <div className="block-heading__subtitle">
              {t('We have achieved great accomplishments during the previous years and expanded into new markets, which confirmed our leading position in the industry.')}
            </div>
          </div>
        </div>
        <div className="atbs-block__inner">
          <div className="section-main" style={{ backgroundImage: 'url("images/k1.jpg")' }}>
            <div className="section-main__inner flex-box flex-box-2i">
              <div className="statistics-column">
                <div className="statistics-number">100%</div>
                <h4 className="statistics-label">{t('Client Satisfaction')}</h4>
              </div>
              <div className="statistics-column">
                <div className="statistics-number">250+</div>
                <h4 className="statistics-label">{t('Projects Completed')}</h4>
              </div>
            </div>
          </div>
          <div className="section-sub">
            <div className="section-sub__inner flex-box">
              <div className="column-left">
                <div className="heading-info">
                  <h4 className="heading__name">{t('The Jewel of Hijaz because quality starts here')}</h4>
                
                </div>
              </div>
              <div className="column-right flex-box flex-box-2i">
                <div className="img-field" data-height={400}>
                  <img src="images/k9.jpg" alt="Project" />
                </div>
                <div className="img-field" data-height={400}>
                  <img src="images/k4.jpg" alt="Project" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
