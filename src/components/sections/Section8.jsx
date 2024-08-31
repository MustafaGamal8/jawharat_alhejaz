import { t } from 'i18next';
import React from 'react';

const posts = [
  {
    image: 'images/k4.jpg',
    title: 'لامي جلوس',
  },
  {
    image: 'images/k5.jpg',
    title: 'يوفي لاك',
  },
  {
    image: 'images/k6.jpg',
    title: "جلوس ماكس",
  },
  {
    image: 'images/k3.jpg',
    title: "بولي لاك",
  },
  {
    image: 'images/k8.jpg',
    title: "باور جلوس",
  },
  {
    image: 'images/k7.jpg',
    title: "HPL",
  },
];


export default function Section8() {
  return (
    <>
      {/* Section 8 */}
      <div className="atbs-block atbs-block--fullwidth atbs-posts-listing--grid-1">
        <div className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className="block-heading__title">{t('Kitchens')}</h4>
            <div className="block-heading__subtitle">{t('Practical and modern designs that make your cooking easier and more enjoyable.')}</div>
          </div>
        </div>
        <div className="container-fullwidth">
          <div className="atbs-block__inner">
            <div className="posts-list flex-box flex-box-3i flex-space-40">
              {posts.map((post, index) => (
                <div key={index} className="list-item">
                  <article className="post post--vertical post--vertical-normal">
                    <div className="post__thumb object-fit">
                      <a href={post.link}>
                        <img src={post.image} alt={post.title} />
                      </a>
                    </div>
                    <div className="post__text text-center">
                      <h3 className="post__title f-22 f-w-600">
                        {post.title}
                      </h3>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
