import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import {
  RiMessengerLine,
  RiTelegramFill,
  RiTelegramLine,
} from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8o9mq19',
      'template_ni2e0qm',
      form.current,
      'Udv0L8VcHA4-qFbVn'
    );
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
            <RiTelegramLine className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Gerson Stuva</h5>
            <a
              href='https://t.me/secret_star_bright'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
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
