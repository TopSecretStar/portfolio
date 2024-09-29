import React from 'react';
import './experience.css';
import { FiCheckCircle } from 'react-icons/fi';
import { skills } from '../../utils/skills';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        {Object.values(skills).map((skill, index) => (
          <div className='experience__card experience__frontend' key={index}>
            <h3>{skill.title}</h3>
            <div className='experience__content'>
              {skill.skills.map((skill, index) => (
                <article className='experience__details' key={index}>
                  <FiCheckCircle className='experience__details-icon' />
                  <div>
                    <h4>{skill}</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
