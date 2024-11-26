import React from 'react'
import {Header} from '../Homepage/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import RecipeReviewCard from '../Homepage/SectionThree/Card/Card';
import {Footer} from '../Homepage/Footer/Footer';
import { removeFromWishList } from '../../../redux/features/wishListSlice';

const Wishlist = () => {
   const dispatch = useDispatch()
 const wishListItems = useSelector((state) => state.wishList.items);

 const handleRemoveFromwishList = () => {
    dispatch(removeFromWishList(item));
  }

  return (
    <div>
        <Header/>
        <h2 style={{textAlign:"center",marginBottom:"1.7rem"}}>Bəyəndiklərim</h2>
   <div style={{display:"flex", flexWrap:"wrap",gap:"1.5rem",justifyContent:"center"}} >
   {wishListItems.length > 0 ? (
        wishListItems.map((item) => (
            <RecipeReviewCard key={item.id} item={item} onRemove={handleRemoveFromwishList}/>
            
        ))
      ) : (
        <p>Bəyəndikləriniz yoxdur.</p>
      )}
    </div>
    <Footer/>
    </div>
  )
}

export default Wishlist