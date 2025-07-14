import React from 'react'
import { Header } from '../Homepage/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import RecipeReviewCard from '../Homepage/SectionThree/Card/Card';
import { Footer } from '../Homepage/Footer/Footer';
import { removeFromBasket } from '../../../redux/features/basketSlice';
import './basket.css'

const Wishlist = () => {
  const dispatch = useDispatch()
  const basketItems = useSelector((state) => state.basket.items);

  const handleRemoveFromBasket= (item) => {
    dispatch(removeFromBasket(item));
  }

  return (
    <>
    <Header />
    <div className='basket-section'>
      <div className="basket-section-center">
      <h2 style={{ textAlign: "center", padding: "30px", fontWeight: "700", fontSize: '36px' }}>Səbətim</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }} >
        {basketItems.length > 0 ? (
          basketItems.map((item) => (
            <RecipeReviewCard key={item.id} item={item}  onRemoveBasket={handleRemoveFromBasket} />

          ))
        ) : (
          <p>Səbətiniz boşdur.</p>
        )}
      </div>
      </div>
    </div>
      <Footer />
  </>
  )
}

export default Wishlist