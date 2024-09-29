import React from 'react';
import './about.css';
import { BsAward } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Education</h5>
              <small>Bachelor's Degree in Computer Science</small>
            </article>

            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>8+ Years in Software Development</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed in My Career</small>
            </article>
          </div>
          <p>
            Accomplished Senior Software Developer with over 8 years of
            experience in designing, developing, and implementing
            high-performance web applications and services. Passionate about
            delivering innovative solutions and optimizing performance while
            embracing continuous learning and professional growth. Adept at
            collaborating with cross-functional teams to deliver high-quality,
            scalable software solutions that meet business needs. Committed to
            excellence, with a strong focus on user experience, agile
            development, and cutting-edge technologies.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
