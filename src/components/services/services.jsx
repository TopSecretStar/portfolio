import React from 'react';
import './services.css';
import { BsCheck2All } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer?</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Building scalable, maintainable UIs with modern JavaScript
                frameworks like React, Vue.js, and Angular.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Expert in state management solutions like Redux, MobX, and Vuex
                for handling complex application states.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Optimizing performance through code splitting, lazy loading, and
                tree shaking.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Ensuring responsive design for all devices using CSS Grid,
                Flexbox, and pre-processors like SASS.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Cross-browser compatibility and accessibility-compliant designs
                following WCAG standards.
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Designing secure, scalable RESTful and GraphQL APIs following
                best practices.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Proficient in database management using PostgreSQL, MySQL, and
                NoSQL solutions like MongoDB.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Implementing microservices architecture with Docker and
                Kubernetes for containerization and scalability.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Applying caching strategies (Redis) and background processing to
                improve performance.
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Mobile Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Building cross-platform mobile apps with React Native and
                Flutter.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Deep knowledge of native development for iOS (Swift) and Android
                (Kotlin).
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Ensuring intuitive, responsive mobile UI/UX experiences
                following platform guidelines.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Optimizing mobile app performance with advanced profiling and
                lazy loading techniques.
              </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>
                Building offline-first mobile apps with data synchronization
                capabilities.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
