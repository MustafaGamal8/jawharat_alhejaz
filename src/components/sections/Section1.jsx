import { t } from 'i18next';
import React from 'react';

export default function Section1() {
  return (
    <>
      {/* Section 1 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-1">
        <div className="atbs-block__inner padding-left-container" style={{ backgroundImage: 'url("images/k1.jpg")' }}>
          <div className="section-main">
            <div className="intro-heading-text">
              <div className="intro-heading__subtitle">{t('Founder of Jawharat Al-Hejaz Trading Est')}</div>
              <h3 className="intro-heading__title">
                {t('Welcome to')} <span className="text-animation">{t('Founder of Jawharat Al-Hejaz Trading Est')}</span>
              </h3>
            </div>
          </div>
          <div className="section-sub">
            <div className="flex-box flex-box-3i">
              <div className="vision-text">
                <span className="vision-label">{t('Kitchens')}</span>
                <h4 className="vision__heading">
                  {t('Leading kitchen design and accessories, offering a range of styles and materials.')}
                </h4>
              </div>
              <div className="vision-text">
                <span className="vision-label">{t('Appliances and Accessories')}</span>
                <h4 className="vision__heading">
                  {t('Innovative solutions for daily comfort and efficiency.')}
                </h4>
              </div>
              <div className="vision-text">
                <span className="vision-label">{t('Dressing')}</span>
                <h4 className="vision__heading">
                  {t('Custom dressing rooms for a personalized touch.')}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
