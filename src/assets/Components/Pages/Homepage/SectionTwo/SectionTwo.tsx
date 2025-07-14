
import { BrandsLogo } from './BrandsLogo'
import './secTwo.css'
import man from'../../../Images/Man.png'
import woman from '../../../Images/WWoman.png'
import uni from '../../../Images/unisex.png'
import kind from '../../../Images/3890909-200.png'
import { useNavigate } from 'react-router-dom'

const SectionTwo = () => {
  const navigate = useNavigate()
  return (
    <div className='secTwo'>
      <h1 className='sec-two-category'>Kateqoriyalar</h1>
      <div className="secTwo-center">
        <BrandsLogo />
        <div className='category'>
          <div className="up-category">
            <div onClick={() => navigate("/man-category")} className="man">
              <h1>Kişi ətirləri</h1>
              <div className="man-image">
                <img className="manImage"src={man} alt="" />
              </div>
            </div>
            <div onClick={() => navigate("/woman-category")}  className="woman">
              <h1>Qadın ətirləri</h1>
              <div className="woman-image">
                <img className="womanImage" src={woman} alt="" />
              </div>
            </div>
          </div>
          <div className="down-category">
            <div onClick={() => navigate("/unisex-category")}  className="uni">
              <h1>Unisex ətirlər</h1>
              <div className="uni-image">
                <img className="uniImage" src={uni} alt="" />
              </div>
            </div>
            <div className="kid">
              <h1>Uşaq ətirləri</h1>
              <div className="kid-image">
                <img  className="kidImage"src={kind} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SectionTwo