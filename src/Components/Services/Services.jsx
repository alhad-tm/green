import React from 'react'
import css from "./Services.module.css"
import S1 from "../../assets/s1.svg"
import S2 from "../../assets/s2.svg"
import S3 from "../../assets/s3.svg"

const Services = () => {
  return (
    <div className={css.container} id='services'>
        <div className={css.div1}>
            <span>Services</span>
        </div>


        <div className={css.div2}>
            <div className={css.sub}> 
             <img src={S1} alt="" /> 
            <span>Design</span>
            </div>
            <div className={css.sub2}> 
             <img className={css.middle} src={S2} alt="" /> 
            <span>Planning</span>
            </div>
            <div className={css.sub}> 
             <img src={S3} alt="" /> 
            <span>Execution</span>
            </div>
           
            


        </div>
      
    </div>
  )
}

export default Services
