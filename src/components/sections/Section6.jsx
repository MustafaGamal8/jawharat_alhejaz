import { t } from 'i18next';
import React from 'react';

export default function Section6() {
  return (
    <>
      {/* Section 6 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-6">
        <div className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className="block-heading__title">{t('Our Team')}</h4>
            <div className="block-heading__subtitle">
              {t('Meet the talented individuals who drive our success.')}
            </div>
          </div>
        </div>
        <div className="container-fullwidth">
          <div className="atbs-block__inner">
            <div className="our-team flex-box flex-box-4i flex-space-20">
              <div className="team-profile text-center">
                <div className="profile__image img-field" data-height={420}>
                  <img src="images/k2.jpg" alt="Matteo Bruni" />
                </div>
                <h3 className="profile__name">Matteo Bruni</h3>
                <div className="profile__bio">Designer</div>
              </div>
              <div className="team-profile text-center">
                <div className="profile__image img-field" data-height={420}>
                  <img src="images/k2.jpg" alt="Michelle Barker" />
                </div>
                <h3 className="profile__name">Michelle Barker</h3>
                <div className="profile__bio">Developer</div>
              </div>
              <div className="team-profile text-center">
                <div className="profile__image img-field" data-height={420}>
                  <img src="images/k2.jpg" alt="Tanner Dolby" />
                </div>
                <h3 className="profile__name">Tanner Dolby</h3>
                <div className="profile__bio">Designer</div>
              </div>
              <div className="team-profile text-center">
                <div className="profile__image img-field" data-height={420}>
                  <img src="images/k2.jpg" alt="David Miller" />
                </div>
                <h3 className="profile__name">David Miller</h3>
                <div className="profile__bio">Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
