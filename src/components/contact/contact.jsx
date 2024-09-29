import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ca3r1n1',
      'template_dqwwxn7',
      form.current,
      '1dgwWAYGYhlcNNCsG'
    ).then((res) => {
      if (res.status === 200) {
        
      }
    });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gerson.stuva.secret@gmail.com</h5>
            <a
              href='mailto:gerson.stuva.secret@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>

          <article className='contact__option'>
            <AiOutlineMobile className='contact__option-icon' />
            <h4>Phone Number</h4>
            <h5>(505) 514-0004</h5>
            <a href='tel:+15055140004' target='_blank' rel='noreferrer'>
              Call Me
            </a>
          </article>
        </div>
        {/*............ Contact Options End ...........*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
