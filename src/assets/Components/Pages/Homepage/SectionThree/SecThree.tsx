import { useEffect, useState } from 'react';
import '../SectionThree/secthree.css';
import { getProduct } from '../../../../redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store'; 
import Card from './Card/Card';


export const SecThree = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  const [visibleItems, setVisibleItems] = useState(4);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);


  const handleShowMore = () => {
    setShowAll(true);
    setVisibleItems(products.length); 
  };

  const handleShowLess = () => {
    setShowAll(false);
    setVisibleItems(4); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='secthree'>
      <div className='secthree-center'>
        <h1 style={{fontFamily:'Montserrat',fontWeight:'700'}}>Sizin üçün ətirlər</h1>
        <section className='secthree-product'>
          {products.slice(0, visibleItems).map((item) => (
   
              <Card key={item.id} item={item} />
 
          ))}
        </section>
        <div className='secthree-controls'>
          {!showAll ? (
            <button onClick={handleShowMore}>Bütün ətirlər</button>
          ) : (
            <button onClick={handleShowLess}>Geri</button>
          )}
        </div>
      </div>
    </div>
  );
};
