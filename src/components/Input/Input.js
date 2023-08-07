import React from 'react'
import style from './Input.module.css'


const Input = ({handleChange, value, title, name, color}) => {
  return (
    <label className={style.sidebar_label_container}>
    <input onChange={handleChange} type="radio" value={value} name={name} />
    <span style={{backgroundColor: color}} className={style.checkmark}></span>{title}
  </label>
  
  )
}

export default Input