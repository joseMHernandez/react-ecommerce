import style from './Nav.module.css'
import React from 'react'
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({handleInputChange, query}) => {
  return (
    <>
    <nav className={style.nav}>

    
  
    <div className='nav-container'>
<input onChange={handleInputChange} value={query} type="text" className={style.search_input}  placeholder='Enter your search shoes ' />
    </div>

    <div className='profile-container'>
    <a href="#">
        <FiHeart className={style.nav_icons}/>
         </a>

         <a href="#">
            <AiOutlineShoppingCart className={style.nav_icons}/>
         </a>
         <a href="#">
            <AiOutlineUserAdd className={style.nav_icons}/>
         </a>
    </div>
    </nav>
    </>
  )
}

export default Nav