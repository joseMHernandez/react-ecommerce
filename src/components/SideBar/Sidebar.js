import React from 'react'
import style from './Sidebar.module.css'
import {BsCart4} from 'react-icons/bs'
import Category from '../SideBar/Category/Category'
import Price from '../SideBar/Price/Price'
import Colors from '../SideBar/Colors/Colors'

const Sidebar = ({handleChange}) => {
    
  return (
    <>
    <section className={style.sidebar}>
        <div className={style.logo_container}>
           <h1><BsCart4 className={style.logo}/></h1> 
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar