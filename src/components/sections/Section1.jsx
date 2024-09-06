import { t } from 'i18next';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section1() {
  const { ref, inView } = useInView()
  return (
    <>
      {/* Section 1 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-1">
        <div className="atbs-block__inner padding-left-container" style={{ backgroundImage: 'url("images/k1.jpg")' }}>
          <div className="section-main">
            <div className="intro-heading-text">
              <div className=" animate__animated animate__fadeInUp intro-heading__subtitle">{t('Founder of Jawharat Al-Hejaz Trading Est')}</div>
              <h3 className="animate__animated animate__fadeInUp intro-heading__title" >
                <span className="text-animation" style={{color:"white"}}>{t('Welcome to the world of creativity and luxury!')}</span>
              </h3>
            </div>
          </div>
          <div className="section-sub">
            <div className="flex-box flex-box-3i">
              <div className="vision-text">
                <span className=" animate__animated animate__fadeInUp vision-label">{t('Kitchens')}</span>
                <h4 className=" animate__animated animate__fadeInUp  vision__heading">
                  {t('Kitchen designs tailored to your practical needs and add a touch of luxury to your home.')}
                </h4>
              </div>
              <div className="vision-text">
                <span className=" animate__animated animate__fadeInUp  vision-label">{t('A team of craftsmen')}</span>
                <h4 className=" animate__animated animate__fadeInUp  vision__heading">
                  {t('Modern designs for all tastes, while adhering to the highest standards of quality and precision.')}
                </h4>
              </div>
              <div className="vision-text">
                <span className=" animate__animated animate__fadeInUp  vision-label">{t('Dressing')}</span>
                <h4 className=" animate__animated animate__fadeInUp  vision__heading">
                  {t('Dressing room designs tailored to your needs and add a touch of luxury to your home.')}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
