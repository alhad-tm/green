import React from 'react'
import css from "./Footer.module.css"
import Logo1 from "../../assets/Green castel logo.svg"
import Twitter from "../../assets/twitter logo.svg"
import Fb from "../../assets/Facebook logo.svg"
import Insta from "../../assets/instagram logo.svg"
import { Link } from 'react-scroll'

const Footer = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <img src={Logo1} alt="" />
        </div>


        <ul className={css.div2list}>
        <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                <li><Link to="services" spy={true} smooth={true}>Services</Link></li>
                <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
        {mobile?   <li>Privacy</li> :  <li>Privacy Policy</li>}
        {mobile?   <li>T&C</li> :  <li>Terms and Conditions</li>}
        
        </ul>



        <div className={css.div3}>

            <div className={css.div3left}>
                <img src={Twitter} alt="" />
                <img src={Fb} alt="" />
                <img src={Insta} alt="" />
            </div>

            <div className={css.div3right}>
                <span>Copyright © 2023 GreenCastle</span>
            </div>

        </div>



      
    </div>
  )
}

export default Footer
