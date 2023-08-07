import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
import style from './Card.module.css'
const Card = ({id, img, title, reviews, prevPrice, newPrice }) => {
  return (
    
    <section className={style.card}>
    <img className={style.card_img} src={img} alt={title} />
    <div className='card-details'>
    <h3 className={style.card_title}>{title}</h3>
    <section  className={style.card_title}>
    <AiFillStar className={style.rating_star}  /> <AiFillStar  className={style.rating_star}/> <AiFillStar  className={style.rating_star}/> <AiFillStar  className={style.rating_star}/>
    <span className={style.total_reviews}>{reviews}</span>
    </section>
    
    <section className={style.card_price}>
        <div className="price">
            <del>${prevPrice}</del> ${newPrice}
        </div>
        <div className="bag">
        <BsFillBagHeartFill className={style.bag_icon}/>
        </div>
    </section>
    </div>
        </section>
  )
}

export default Card