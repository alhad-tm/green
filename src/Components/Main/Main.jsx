import React from 'react'
import css from "./Main.module.css"
import Mainlogo from "../../assets/Green castel logo main.svg"

const Main = () => {
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <img src={Mainlogo} alt="" />
        </div>

        <div className={css.div2}>
            <span>Green Castle</span>
            <span> Real Estate</span>
        </div>

        <div className={css.div3}>
            <span>Welcome to The Green Castle Construction Company!</span>
        </div>

      
    </div>
  )
}

export default Main
