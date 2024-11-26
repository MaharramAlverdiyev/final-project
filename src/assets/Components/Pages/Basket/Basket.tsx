import React from 'react'
import {Header} from '../Homepage/Header/Header'
import { useSelector } from 'react-redux';
import RecipeReviewCard from '../Homepage/SectionThree/Card/Card';
import {Footer} from '../Homepage/Footer/Footer';



const Basket = () => {
 const basketItems = useSelector((state) => state.basket.items);


  return (
    <div>
        <Header/>
        <h2 style={{textAlign:"center",marginBottom:"1.7rem"}}>Səbətim</h2>
   <div style={{display:"flex", flexWrap:"wrap",gap:"1.5rem",justifyContent:"center"}} >
   {basketItems.length > 0 ? (
        basketItems.map((item,index) => (
            <RecipeReviewCard key={index} item={item}/>  
        ))
      )  : (
        <p>Səbətiniz boşdur</p>
      )}
    </div>
    <Footer/>
    </div>
  )
}

export default Basket