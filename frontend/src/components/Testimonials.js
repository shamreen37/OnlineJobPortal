import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/profile.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';



const Testimonials = () => {
  return (
    <div className='testimonial-section py-5'>
      <div className="container swiper-container">
        <h3 className="heading">Sounds from our happy users</h3>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'3'}
          coverflowEffect={{
            rotate: 3,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            {/* <img src={slide_image_1} alt="slide_image" /> */}
            <div className="testimonial-div">
              {/* try */}
              <figure class="snip1192">
                <blockquote>This online job portal has truly revolutionized my job search. With its intuitive design and comprehensive features, finding relevant opportunities has never been easier. I highly recommend this platform to all job seekers out there!
                </blockquote>
                <div class="author">
                  <img src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="sq-sample1" />
                  <p>Pelican Steve </p>
                </div>
              </figure>
              {/* try */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
           
            <div className="testimonial-div">
              <figure class="snip1192 hover">
                <blockquote>I can't thank this job portal enough for simplifying my job search. The quality job matches and excellent search filters saved me valuable time and effort. It's a game-changer for anyone looking for their next career move.</blockquote>
                <div class="author">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sq-sample24" />
                  <p>Max Conversion</p>
                </div>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={slide_image_3} alt="slide_image" /> */}
            <div className="testimonial-div">
              <figure class="snip1192">
                <blockquote>The top-tier employers I connected with through this job portal exceeded my expectations. The platform's robust network and efficient matching system opened doors to incredible opportunities. I'm thrilled with the results!</blockquote>
                <div class="author">
                  <img src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="sq-sample29" />
                  <p>Eleanor Faint</p>
                </div>
              </figure>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            {/* <img src={slide_image_5} alt="slide_image" /> */}
            <div className="testimonial-div">
            <figure class="snip1192">
  <blockquote>From seamless application processes to prompt and responsive support, this job portal delivers an exceptional user experience. It surpassed my expectations and made my job search journey stress-free. Kudos to the team behind it!</blockquote>
  <div class="author">
    <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="sq-sample29"/>
    <p>Eleanor Faint</p>
  </div>
</figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={slide_image_6} alt="slide_image" /> */}
            <div className="testimonial-div">
            <figure class="snip1192">
  <blockquote>I couldn't believe how quickly I found my dream job on this online portal! The platform's user-friendly interface and efficient search system made the entire process a breeze. I'm grateful for this amazing resource!</blockquote>
  <div class="author">
    <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sq-sample29"/>
    <p>Eleanor Faint</p>
  </div>
</figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={slide_image_7} alt="slide_image" /> */}
            <div className="testimonial-div">
            <figure class="snip1192">
  <blockquote>This online job portal was the key to finding the perfect job that aligned with my skills and interests. I'm grateful for the comprehensive job listings and the platform's user-friendly nature. It made all the difference in my career success.</blockquote>
  <div class="author">
    <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="sq-sample29"/>
    <p>Eleanor Faint</p>
  </div>
</figure>
            </div>
          </SwiperSlide>

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <i class="fa-solid fa-circle-arrow-left"></i>
            </div>
            <div className="swiper-button-next slider-arrow">
              <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>

    </div>
  )
}

export default Testimonials