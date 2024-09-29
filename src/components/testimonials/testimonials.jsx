import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avartar1.jpg';
import AVTR2 from '../../assets/avartar2.jpg';
import AVTR3 from '../../assets/avartar3.jpg';
import AVTR4 from '../../assets/avartar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    // link: "https://www.linkedin.com/in/yishak-wesego/",

    name: 'Yishak Wesego',
    review:
      "It was a pleasure collaborating with Albert on different projects. One of the things that I think is special about his is that he never settles, even after completing the projects he finds other resources and strengthens his knowledge. Collaborating with his is easy and comfortable, it's like working with someone you've known for a long period of time.",
  },
  {
    avatar: AVTR2,
    // link: "https://www.linkedin.com/in/hamzaalitarar/",
    name: 'Hamza Tarar',
    review:
      "I worked with Albert in the same team and his communication skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
  },
  {
    avatar: AVTR3,
    // link: "https://www.linkedin.com/in/akuu-khan/",

    name: 'akbar (Aku) Khan',
    review:
      "I worked with Albert some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach his, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing his best and going beyond the requirements of the project he's building.",
  },
  {
    avatar: AVTR4,
    // link: "https://www.linkedin.com/in/isaicespedes/",

    name: 'Isai Céspedes',
    review:
      "Throughout all our collaborations, Albert has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, link }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <a href={link}>
                  <img src={avatar} alt='avatar' />
                </a>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
