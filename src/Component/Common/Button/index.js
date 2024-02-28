import React from 'react'
import "./style.css";

function Button({text ,onClick ,outlined ,event}) {
  return (
    <button className={outlined?"outlined-btn":'btn'} onClick={event===true?()=>onClick():null}>{text}</button>
  )
}

export default Button
