import React from 'react'
import css from "./About.module.css"
import Who from "../../assets/whovr.svg"

const About = () => {
  return (
    <div className={css.container} id='about'>
        <div className={css.left}>

            {/* <div className={css.leftone}> */}
                <span>Who We Are !</span>
                <span>With a rich legacy of 17 years in the construction industry, The Green Castle 
                    stands tall as a distinguished provider of exceptional construction services.
                     Our unwavering commitment to excellence and a steadfast dedication to our clients' 
                     visions have earned us a reputable position in the market. <br />

      At The Green Castle, we take pride in offering a comprehensive range of services that encompass design,
 planning, and execution. Whether you aspire to bring your dream home to life, embark on a commercial venture,
  or undertake a renovation project, we possess the expertise and experience
   to transform your dreams into reality.</span>
            {/* </div> */}

        </div>


        <div className={css.right}>
            <img src={Who} alt="" />  
        </div>
      
    </div>
  )
}

export default About
