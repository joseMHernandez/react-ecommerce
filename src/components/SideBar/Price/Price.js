import React from 'react'
import style from './Price.module.css'
import Input from '../../Input/Input'


const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className={style.sidebar_title}>Price</h2>
      <label className={style.sidebar_label_container}>
      <input  onChange={handleChange} type="radio"  value=''  name='test2'/>
      <span className={style.checkmark}></span>All
    </label>

<Input
handleChange={handleChange}
value={50}
title='$0 - 50'
name='test2'
/>


<Input
handleChange={handleChange}
value={100}
title='$50 - 100'
name='test2'
/>



<Input
handleChange={handleChange}
value={150}
title='$150-200'
name='test2'
/>



<Input
handleChange={handleChange}
value={200}
title='Over $50'
name='test2'
/>


    {/* <label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>All
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>$0 - $50
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>$50 - $100
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>$100 - $150
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio" name='test2' />
      <span className={style.checkmark}></span>Over $150
    </label>
     */}
    

    </div>
  )
}

export default Price