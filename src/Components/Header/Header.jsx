import React from 'react'
import css from "./Header.module.css"
import Logo1 from "../../assets/Green castel logo.svg"

const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
            <img src={Logo1} alt="" />
        </div>


      
            <ul className={css.rightlist}>
                <li>About us</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
       
      
    </div>
  )
}

export default Header
