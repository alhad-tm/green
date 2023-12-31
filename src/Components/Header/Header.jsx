import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo1 from "../../assets/Green castel logo new.svg"
import Bars from "../../assets/Bars.svg"
import { Link } from 'react-scroll'
import Close from "../../assets/close.png"
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false); 
  return (
    <div className={css.container}>
        <div className={css.left}>
            <img src={Logo1} alt="" />
           
        </div>
        <div className={css.right}>


        {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img className={css.bars}
            src={Bars}
            alt=""
           
          />
        </div>
      ) : (
        <ul className={css.rightlist} onClick={()=>setMenuOpened(false)}>
        {mobile? <div className={css.main}>
          <div className={css.m1}> <img src={Logo1} alt="" />  </div>
          <div className={css.m2}> <img src={Close} alt="" /></div>
           </div>:""}
                <li><Link to="about" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>About us</Link></li>
                <li><Link to="services" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>Services</Link></li>
                <li><Link to="contact" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>Contact</Link></li>
              
            </ul>)}
            </div>
      
    </div>
  )
}

export default Header
