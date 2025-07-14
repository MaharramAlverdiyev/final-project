import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../Homepage/Header/Header';
import { Footer } from '../Homepage/Footer/Footer';
import { GoDotFill } from 'react-icons/go';
import './detailpage.css';
import { addToBasket } from '../../../redux/features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { SlBasket } from 'react-icons/sl';

export const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const isBasket = basketItems.some((i) => i.id === product?.id);

  const sizes = ['15 ML', '30 ML', '50 ML', '100 ML'];

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://672f319c229a881691f220af.mockapi.io/Perfumes/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Ürün verisi alınırken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
  };

  if (loading) {
    return (
      <>
        <Header />
        <p>Yüklənir...</p>
        <Footer />
      </>
    );
  }

  if (!product) {
    return <p>Ürün tapılmadı.</p>;
  }

  return (
    <div className="detail-page">
      <Header />
      <div className="detail-sec">
        <div className="detail-sec-center">
          <ul style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', width: '26%',  }}>
            <li style={{color:'#555'}}>Ətirlər</li>
            <li style={{display:'flex', alignItems:'center', gap:'10px'}}>
              <GoDotFill />
              {product.name}
            </li>
          </ul>
          <div className="product-container">
            <div className="product-image">
              <img style={{ width: '200px' }} src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-text">
                <div className="product-textt">
                <p className="product-subtitlee">Kateqoriya: {product.category}</p>
                <p className="product-subtitlee">Brend: {product.brand}</p>
                </div>
                <p style={{margin:'0', fontWeight:'600'}}>Ətir tərkibi:</p>
                <p className='product-subtitlee' style={{color:'#555'}}>{product.text}</p>
              </div>
              <p className="product-subtitle">Select your size:</p>
              <div className="product-options">
                <div className="option-item">
                  <form style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent:'center'  }}>
                    {sizes.map((size) => (
                      <label
                        key={size}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '25px',
                          border: selectedSize === size ? '1px solid white' : '1px solid black',
                          backgroundColor: selectedSize === size ? 'black' : 'white',
                          color: selectedSize === size ? 'white' : 'black',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Montserrat',
                          fontSize: '14px',
                        }}
                      >
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          checked={selectedSize === size}
                          onChange={() => setSelectedSize(size)}
                          style={{ display: 'none' }}
                        />
                        {size}
                      </label>
                    ))}
                  </form>
                </div>
              </div>
              <div className="detail-buttons">
                <div className="count-button">
                  <button onClick={decrease}>-</button> <span style={{fontWeight:'600'}}>{count}</span> <button onClick={increase}>+</button>
                </div>
                <div className={`baskett ${isBasket ? 'active' : ''}`} onClick={handleAddToBasket}>
                  {isBasket ? (
                    <>
                      <SlBasket className="basket-icon" /> Səbətə əlavə olundu!
                    </>
                  ) : (
                    <>
                      <SlBasket className="basket-icon" /> Səbətə əlavə et!
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
