import { t } from 'i18next';
import React from 'react';

export default function Section4() {
  return (
    <>
      {/* Section 4 */}
      <div className="atbs-block atbs-block--fullwidth atbs-featured-module-4">
        <div className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className="block-heading__title">{t('Our Works')}</h4>
            <div className="block-heading__subtitle">
              {t('Explore our diverse portfolio showcasing our best projects.')}
            </div>
          </div>
        </div>
        <div className="container-fullwidth">
          <div className="atbs-block__inner">
            <div className="gallery-list flex-box flex-box-3i flex-space-30">
              <div className="gallery-column">
                <div className="img-field m-b-30" data-height={600}>
                  <img src="images/k1.jpg" alt="Project 1" />
                </div>
                <div className="img-field" data-height={400}>
                  <img src="images/k2.jpg" alt="Project 2" />
                </div>
              </div>
              <div className="gallery-column">
                <div className="img-field m-b-30" data-height={450}>
                  <img src="images/k4.jpg" alt="Project 3" />
                </div>
                <div className="img-field m-b-30" data-height={220}>
                  <img src="images/k5.jpg" alt="Project 4" />
                </div>
                <div className="img-field" data-height={300}>
                  <img src="images/k6.jpg" alt="Project 5" />
                </div>
              </div>
              <div className="gallery-column">
                <div className="img-field m-b-30" data-height={275}>
                  <img src="images/k11.jpg" alt="Project 6" />
                </div>
                <div className="img-field m-b-30" data-height={260}>
                  <img src="images/k8.jpg" alt="Project 7" />
                </div>
                <div className="img-field m-b-30" data-height={250}>
                  <img src="images/k9.jpg" alt="Project 8" />
                </div>
                <div className="img-field" data-height={155}>
                  <img src="images/k10.jpg" alt="Project 9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
