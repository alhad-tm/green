import React from 'react'
import css from "./Why.module.css"

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const Why = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <span>Why Choose The Green Castle Construction Company?</span>
        </div>

 {mobile? (<Swiper className={css.swiperdiv}
     modules={[Pagination]}
     //    navigation={true}
        pagination={true}
        loopFillGroupWithBlank={true}
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
 >

    <SwiperSlide>
    <div className={css.mainbox}>
                
                <span className={css.span1}>1. Unmatched Experience</span>
        <span className={css.span2}>With 17 years of experience in the construction industry, The Green Castle has successfully completed numerous projects across various sectors. Our seasoned team possesses an unparalleled wealth of knowledge and expertise, guaranteeing a smooth and successful construction journey.</span>
        
       
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className={css.box2}>
                <span className={css.span1}>2. Client-Centric Philosophy</span>
                <span  className={css.span2}>At The Green Castle, client satisfaction is paramount. We build strong partnerships, tailor services to your needs, and make your dreams our mission, exceeding expectations at every step.</span>
            </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className={css.box3}>
                <span className={css.span1}>3. Quality and Reliability</span>
                <span  className={css.span2}>When you choose The Green Castle, you choose excellence and reliability. We source only the finest materials and adhere to industry-leading practices to construct structures that exemplify durability, aesthetics, and sustainability.</span>
            </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className={css.box4}>
                <span className={css.span1}>4. Transparent Communication</span>
                <span  className={css.span2}>Clear and transparent communication is integral to our approach. Throughout the entire construction process, we keep you informed about the progress, challenges, and any modifications that may arise, ensuring a seamless and stress-free experience.</span>
            </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className={css.box5}>
                <span className={css.span1}>5. Passion for Perfection</span>
                <span className={css.span2}>At The Green Castle, we approach each project with an unwavering passion for perfection. Our attention to detail and commitment to delivering the highest standards of workmanship shine through in every project we undertake.</span>
            </div>

    </SwiperSlide>

 </Swiper>







 ) :    ( <div className={css.div2}>
            <div className={css.mainbox}>
                
                        <span className={css.span1}>1. Unmatched Experience</span>
                <span className={css.span2}>With 17 years of experience in the construction industry, The Green Castle has successfully completed numerous projects across various sectors. Our seasoned team possesses an unparalleled wealth of knowledge and expertise, guaranteeing a smooth and successful construction journey.</span>
                
               
            </div>
            <div className={css.boxwrap}>
            <div className={css.box2}>
                <span className={css.span1}>2. Client-Centric Philosophy</span>
                <span  className={css.span2}>At The Green Castle, client satisfaction is paramount. We build strong partnerships, tailor services to your needs, and make your dreams our mission, exceeding expectations at every step.</span>
            </div>
            <div className={css.box4}>
                <span className={css.span1}>4. Transparent Communication</span>
                <span  className={css.span2}>Clear and transparent communication is integral to our approach. Throughout the entire construction process, we keep you informed about the progress, challenges, and any modifications that may arise, ensuring a seamless and stress-free experience.</span>
            </div>
            </div>

            <div className={css.boxwrap}>
                    
            <div className={css.box3}>
                <span className={css.span1}>3. Quality and Reliability</span>
                <span  className={css.span2}>When you choose The Green Castle, you choose excellence and reliability. We source only the finest materials and adhere to industry-leading practices to construct structures that exemplify durability, aesthetics, and sustainability.</span>
            </div>
            <div className={css.box5}>
                <span className={css.span1}>5. Passion for Perfection</span>
                <span className={css.span2}>At The Green Castle, we approach each project with an unwavering passion for perfection. Our attention to detail and commitment to delivering the highest standards of workmanship shine through in every project we undertake.</span>
            </div>
            </div>
         
          
              
         
          
            </div>)}
           
          
        </div>
      

  )
}

export default Why
