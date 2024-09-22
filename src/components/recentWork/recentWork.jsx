import React from 'react';
import './recentWork.css';
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Sales of the summar collection',
    github: 'https://github.com/TopSecretStar/next-ecommerce-frontend',
    demo: 'https://next-ecommerce-frontend-three.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Summer Sale Stylish',
    github: 'https://github.com/TopSecretStar/ecommerce-website',
    demo: 'https://ecommerce-website-eta-snowy.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'FriedShop',
    github: 'https://github.com/TopSecretStar/friendshop-frontend',
    demo: 'https://friedshop.vercel.app/',
  },
];

const RecentWork = () => {
  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='recentWork__item'>
              <div className='recentWork__item-image'>
                <img src={image} alt='title' />
              </div>
              <h3>{title}</h3>
              <div className='recentWork__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentWork;
