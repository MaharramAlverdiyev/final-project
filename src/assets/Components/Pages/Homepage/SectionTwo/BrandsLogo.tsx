import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './brandsLogo.css'

interface Photo {
  id: number;
  image: string;
}

export const BrandsLogo = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://672f319c229a881691f220af.mockapi.io/Brands'); 
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Fotoğraflar yüklenirken hata oluştu:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <Swiper 
        className='slider'
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={5}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img src={photo.image} alt="" style={{ width: '100%', height: 'auto' }} />
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
