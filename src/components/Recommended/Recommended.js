import React from 'react'
import style from './Recommended.module.css'
import Button from '../Buttons/Buttons'
const Recommended = ({handleButton}) => {
  return (
    <>
    <div>
      <h2 className={style.recommended_title}>Recommended</h2>
      <div className={style.recommended_flex}>
       <Button onClickHandler={handleButton} value="" title="All Products" />
          <Button onClickHandler={handleButton} value="Nike" title="Nike" />
          <Button onClickHandler={handleButton} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleButton} value="Puma" title="Puma" />
          <Button onClickHandler={handleButton} value="Vans" title="Vans" />
        </div>
      

    </div>
    </>
  )
}

export default Recommended