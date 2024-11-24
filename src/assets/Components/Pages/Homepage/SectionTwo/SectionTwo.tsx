
import { BrandsLogo } from './BrandsLogo'
import './secTwo.css'
import man from'../../../Images/Man.png'
import woman from '../../../Images/WWoman.png'
import uni from '../../../Images/unisex.png'

const SectionTwo = () => {
  return (
    <div className='secTwo'>
      <div className="secTwo-center">
        <BrandsLogo />
        <div className='category'>
          <div className="up-category">
            <div className="man">
              <h1>Kişi ətirləri</h1>
              <div className="man-image">
                <img className="manImage"src={man} alt="" />
              </div>
            </div>
            <div className="woman">
              <h1>Qadın ətirləri</h1>
              <div className="woman-image">
                <img className="womanImage" src={woman} alt="" />
              </div>
            </div>
          </div>
          <div className="down-category">
            <div className="uni">
              <h1>Unisex ətirlər</h1>
              <div className="uni-image">
                <img className="uniImage" src={uni} alt="" />
              </div>
            </div>
            <div className="kid">
              <h1>Uşaq ətirləri</h1>
              <div className="kid-image">
                <img  className="kidImage"src="https://www.xxl-parfum.ch/images/kinder_parfum.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SectionTwo