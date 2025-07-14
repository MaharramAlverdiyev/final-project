import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../Card/card.css'
import { SlBasket } from "react-icons/sl";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../../../../redux/features/wishListSlice';
import { addToBasket } from '../../../../../redux/features/basketSlice';
import { Link } from 'react-router-dom';

export default function RecipeReviewCard({ item, onRemoveWishList, onRemoveBasket }) {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList.items);
  const basketItems = useSelector((state) => state.basket.items);
  const isBasket = basketItems.some(basket => basket.id === item.id)
  const isWished = wishListItems.some(wish => wish.id === item.id);

  const handleAddTowishList = () => {
    dispatch(addToWishList(item));
  };

  const handleAddToBasket = () => {
    dispatch(addToBasket(item));
  };

  return (
    <Card sx={{ maxWidth: 407 }} style={{ boxShadow: "10px 10px 20px yellow", cursor: "pointer" }} className='card'>
      <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }} key={item.id}>
        <div className='cardheader'>
          <CardHeader
            title={item.name}
            subheader={`${item.brand}`}
            className='card-tittle'
          />
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{
              width: '100%',
              objectFit: 'cover',
              height: '200px',
              padding: '10px'
            }}
          />
        </div>
        <div className="card-content">
          <CardHeader
            title={`Qiymət: ${item.price} ₼`}
            subheader={`Məhsulun sayı: ${item.stock}`}
          />
          <CardContent className='card-star'>
            <p style={{ color: 'rgba(0, 0, 0, 0.6)', margin: '0' }}>Kateqoriya: {item.category}</p>
            <div className='star'>
              <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
              <span>(4.5)</span>
            </div>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Montserrat' }}>
              {item.text}
            </Typography>
          </CardContent>
        </div>
      </Link>

      <div className="fav-basket">
        {onRemoveWishList ? (
          <div onClick={() => onRemoveWishList(item)} className="fav" style={{ color: "white" }}>
            <IoHeart className='fav-icon' /> Bəyənməkdən çıxar!
          </div>
        ) : (
          <div onClick={handleAddTowishList} className="fav">
            {isWished ? (
              <>
                <IoHeart className='fav-icon'/> Bəyənildi!
              </>
            ) : (
              <>
                <IoHeartOutline className='fav-icon' /> Bəyən!
              </>
            )}
          </div>
        )}
        <div className="baskett">
          {onRemoveBasket ? (
          <div onClick={() => onRemoveBasket(item)} className="baskett" style={{ color: "white" }}>
            <SlBasket className='basket-icon' /> Səbətdən çıxart!
          </div>
        ) : (
          <div onClick={handleAddToBasket} className="baskett">
            {isBasket ? (
              <>
                <SlBasket className='basket-icon'/> Səbətə əlavə olundu!
              </>
            ) : (
              <>
                <SlBasket className='basket-icon' /> Səbətə əlavə et!
              </>
            )}
          </div>
        )}
        </div>
      </div>
    </Card>
  );
}
