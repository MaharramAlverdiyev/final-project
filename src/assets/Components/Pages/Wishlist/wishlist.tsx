import React from 'react'
import { Header } from '../Homepage/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import RecipeReviewCard from '../Homepage/SectionThree/Card/Card';
import { Footer } from '../Homepage/Footer/Footer';
import { removeFromWishList } from '../../../redux/features/wishListSlice';
import './wishlist.css'

const Wishlist = () => {
  const dispatch = useDispatch()
  const wishListItems = useSelector((state) => state.wishList.items);

  const handleRemoveFromwishList = (item) => {
    dispatch(removeFromWishList(item));
  }

  return (
    <>
    <Header />
    <div className='fav-section'>
      <div className="fav-section-center">
      <h2 style={{ textAlign: "center", padding: "30px", fontWeight: "700", fontSize: '36px' }}>Bəyəndiklərim</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }} >
        {wishListItems.length > 0 ? (
          wishListItems.map((item) => (
            <RecipeReviewCard key={item.id} item={item}  onRemoveWishList={handleRemoveFromwishList} />

          ))
        ) : (
          <p>Bəyəndikləriniz yoxdur.</p>
        )}
      </div>
      </div>
    </div>
      <Footer />
  </>
  )
}

export default Wishlist