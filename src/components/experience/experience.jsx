import React from 'react';
import './experience.css';
import { FiCheckCircle } from 'react-icons/fi';
import { frontend, backend, others } from '../../utils/skills';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd Development</h3>
          <div className='experience__content'>
            {frontend.map((skill, index) => (
              <article className='experience__details' key={index}>
                <FiCheckCircle className='experience__details-icon' />
                <div>
                  <h4>{skill.label}</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>BackEnd Development</h3>
          <div className='experience__content'>
            {backend.map((skill, index) => (
              <article className='experience__details' key={index}>
                <FiCheckCircle className='experience__details-icon' />
                <div>
                  <h4>{skill.label}</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__mobile'>
          <h3>Mobile & DevOps Development</h3>
          <div className='experience__content'>
            {others.map((skill, index) => (
              <article className='experience__details' key={index}>
                <FiCheckCircle className='experience__details-icon' />
                <div>
                  <h4>{skill.label}</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
