import React from 'react'
import style from './Colors.module.css'
import Input from '../../Input/Input'



const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className={style.sidebar_title}>Colors</h2>
      <label className={style.sidebar_label_container}>
      <input onChange={handleChange} type="radio" value='' name='test1'/>
      <span className={style.checkmark}></span>All
    </label>

    <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

<label className={style.sidebar_label_container}>
      <input  onChange={handleChange} type="radio" value='white' name='test1'/>
      <span style={{backgroundColor: 'white', border: '2px solid black', color: '#000'  }} className={style.checkmark}></span>White
    </label>



{/* 
<label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>All
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>Black
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>Blue
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio"  name='test2'/>
      <span className={style.checkmark}></span>Red
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio" name='test2' />
      <span className={style.checkmark}></span>Green
    </label>

    <label className={style.sidebar_label_container}>
      <input type="radio" name='test2' />
      <span className={style.checkmark}></span>White
    </label>
     */}

    </div>
  )
}

export default Colors