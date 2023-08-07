import React from 'react'
import style from './Products.module.css'



const Products = ({result}) => {
  return (
    <>
  <section className={style.card_container}>{result}</section>
    </>
  )
}

export default Products


/* 
{
  db.map(({id, img, title, star, reviews, prevPrice, newPrice})=>{
    return (<Card
      key={id}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
  
      />
      )
  })
 } */