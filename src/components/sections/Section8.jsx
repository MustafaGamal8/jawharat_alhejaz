import { t } from 'i18next';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const posts = [
  {
    image: 'images/k7.jpg',
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
];


export default function Section8() {
  
  const { ref, inView } = useInView()
  return (
    <>
      {/* Section 8 */}
      <div className="atbs-block atbs-block--fullwidth atbs-posts-listing--grid-1 bg-secondary bg-opacity-5 p-2">
        <div ref={ref} className="container-fullwidth">
          <div className="block-heading block-heading_style-1 block-heading--center">
            <h4 className={`block-heading__title animate__animated ${inView ? 'animate__fadeInUp' : ''}`}>{t('Kitchens')}</h4>
            <div className={`block-heading__subtitle animate__animated ${inView ? 'animate__fadeInUp' : ''}`}>{t('Practical and modern designs that make your cooking easier and more enjoyable.')}</div>
          </div>
        </div>
        <div className="container-fullwidth ">
          <div className="atbs-block__inner">
            <div className="posts-list flex-box flex-box-3i flex-space-40 justify-center">
              {posts.map((post, index) => (
                <div className={'animate__animated ' + (inView ? 'animate__fadeInUp' : '')} key={index}>
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

          <Link to="/kitchens" className={`p-2 rounded bg-primary   text-white flex items-center justify-center  w-[200px] mx-auto my-14 hover:bg-secondary transition-all hover:text-white ${inView ? 'animate__animated animate__fadeInUp' : ''}`}>{t('View All Kitchens')}</Link>
        </div>
      </div>
    </>
  );
}
