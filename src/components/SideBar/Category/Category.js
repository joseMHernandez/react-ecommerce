import React from 'react'
import style from './Category.module.css'
import Input from '../../Input/Input'


const Category = ({handleChange}) => {
  return (
    <>
  
    <div>
    <h2 className={style.sidebar_title}>Category</h2>
    <label className={style.sidebar_label_container}>
      <input onChange={handleChange} type="radio" value='' name='test' />
      <span className={style.checkmark}></span>All
    </label>
    

<Input
handleChange={handleChange}
value='sneakers'
title='sneakers'
name='test'
/>

<Input
handleChange={handleChange}
value='flats'
title='flats'
name='test'
/>

<Input
handleChange={handleChange}
value='sandals'
title='sandals'
name='test'
/>


<Input
handleChange={handleChange}
value='heels'
title='heels'
name='test'
/>

{/*     
    <label className={style.sidebar_label_container}>
      <input type="radio" />
      <span className={style.checkmark}></span>All
    </label>
    

    
    <label className={style.sidebar_label_container}>
      <input type="radio" />
      <span className={style.checkmark}></span>Sneakers
    </label>
    

      
    <label className={style.sidebar_label_container}>
      <input type="radio" />
      <span className={style.checkmark}></span>Flats
    </label>
      


      
    <label className={style.sidebar_label_container}>
      <input type="radio" />
      <span className={style.checkmark}></span>Sandals
    </label>
      

    
    <label className={style.sidebar_label_container}>
      <input type="radio" />
      <span className={style.checkmark}></span>Heels
    </label>
      </div>
 */}
 </div>
      </>
      )
}

export default Category