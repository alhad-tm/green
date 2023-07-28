import React from 'react'
import css from "./Services.module.css"
import S1 from "../../assets/s1.svg"
import S2 from "../../assets/s2.svg"
import S3 from "../../assets/s3.svg"

const Services = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span>Services</span>
        </div>


        <div className={css.div2}>
            <img src={S1} alt="" />
            <img src={S2} alt="" />
            <img src={S3} alt="" />
        </div>
      
    </div>
  )
}

export default Services
