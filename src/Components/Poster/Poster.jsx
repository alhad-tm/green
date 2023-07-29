import React from 'react'
import css from "./Poster.module.css"
import Posterbg from "../../assets/posterbg.svg"
import White from "../../assets/whitelogo.svg"

const Poster = () => {
  return (
    <div className={css.container}> 
        <img src={Posterbg} alt="" />

        <div className={css.inside}>
            <img src={White} alt="" />
            <span>The Green Castle Construction Company isn't merely a name; it 
                symbolizes our commitment to building enduring structures that
                 embrace innovation and sustainability. Partner with us today,
                  and let's build a future together that echoes strength, elegance, 
                  and harmony.</span>

        </div>

      
      
    </div>
  )
}

export default Poster
 