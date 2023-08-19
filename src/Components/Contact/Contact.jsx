import React from 'react'
import css from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={css.container} id='contact'>

        <div className={css.div1}>

        <span>Contact us now to embark on an extraordinary construction journey with 
The Green Castle!</span>

        </div>

        <div className={css.div2}>
          
        <div className={css.div2left}>
            <span >Contact us</span>
            <span>Call +91 00000 00000 <br />or contact us via email 
                contact@thegreencastle.co.in</span>
          

        </div>
        <div className={css.div2right}>

            <span>Location</span>
            <span>124-H, 3rd Floor, Thendral Complex,
      DB Road, RS Puram, 
             Coimbatore - 641002</span>

        </div>

        </div>
      
    </div>
  )
}

export default Contact
