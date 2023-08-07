import './index.css'
import Products from './components/Products/Products'
import Nav from './components/Navigation/Nav'
import Recommended from './components/Recommended/Recommended';
//import Colors from './components/SideBar/Colors/Colors';
import Sidebar from './components/SideBar/Sidebar';
import { useState } from 'react';
import Card from './components/Card/Card'

//Data

import data from './db/data'


function App() {
const [selectedCategory, setSelectedCategory] = useState(null)
const [query, setquery] = useState('')

//-------------input filter-------------


const handleInputChange = (e)=>{
  setquery(e.target.value)
}

const filteredItems = data.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);

//-------------Radio filter-------------

const handleChange = (e) =>{
setSelectedCategory(e.target.value)
}

//-------------Buttons filter-------------

const handleButton = (e) =>{
  setSelectedCategory(e.target.value)
}

const filteredData = (products, selected, query) =>{

  let filteredProducts = products

  //filtering input items
  if(query){
    filteredProducts = filteredItems
  }


  //selected filter

  if(selected){
    filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title})=>{
      return ( category === selected ||
       color === selected || 
       company === selected ||
        newPrice === selected ||
        title === selected )
    })
  }

  return filteredProducts.map(({id, img, title, star, reviews, prevPrice, newPrice })=>{
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
}

const result = filteredData(data, selectedCategory, query)



  return (
    <div className="App">
      <Sidebar handleChange={handleChange}/>
        <Nav query={query} handleInputChange={handleInputChange} />
        <Recommended handleButton={handleButton}/>
        <Products result={result}/>
       
    </div>
  );
}

export default App;
