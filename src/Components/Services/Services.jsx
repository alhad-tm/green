import React from 'react'
import css from "./Services.module.css"
import S1 from "../../assets/s1.svg"
import S2 from "../../assets/s2new.svg"
import S3 from "../../assets/s3.svg"

const Services = () => {
  return (
    <div className={css.container} id='services'>
        <div className={css.div1}>
            <span>Services</span>
        </div>


        <div className={css.div2}>
            <div className={css.sub}> 
            <div className={css.text}>
              <span>At The Green Castle, we believe that every construction journey begins with a visionary design. Our team of highly skilled architects and designers work closely with you to understand your unique preferences and requirements. Through a collaborative approach, we craft innovative and sustainable designs that align perfectly with your aspirations, while adhering to your budget and schedule.</span>
            </div>
             <img src={S1} alt="" /> 
            <span>Design</span>
            </div>
            <div className={css.sub2}> 
            <div className={css.text2}>
              <span>A well-thought-out plan is the cornerstone of every successful construction endeavor. Our seasoned planners meticulously outline the project's blueprint, taking into account every detail to ensure a streamlined and efficient process. From resource allocation to time management, we leave no room for compromise, aiming for the highest level of project efficiency.</span>
            </div>
             <img className={css.middle} src={S2} alt="" /> 
            <span>Planning</span>
            </div>
            <div className={css.sub}> 
            <div className={css.text}>
              <span>The Green Castle takes immense pride in its execution capabilities. Our team of dedicated professionals, coupled with state-of-the-art technology and premium-grade materials, ensures the delivery of projects of the utmost quality. We prioritize safety, craftsmanship, and attention to detail, ensuring that each structure we build stands as a testament to our unwavering commitment to excellence.</span>
            </div>
             <img src={S3} alt="" /> 
            <span>Execution</span>
            </div>
           
            


        </div>
      
    </div>
  )
}

export default Services
