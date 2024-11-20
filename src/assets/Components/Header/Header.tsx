import '../Header/header.css'
import logo from "../../Images/logo.png"
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import { FaTiktok } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { SlBasket } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
    return (
        <header>
            <div className="up-header">
                <a href=""><CiFacebook /></a>
                <a href=""><SlSocialInstagram /></a>
                <a href=""><LiaTelegram /></a>
                <a href=""><FaTiktok /></a>
            </div>
            <div className="down-header">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>QARABAGH <br /> PERFUMERY</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Öz ətirini axtar' />
                    <div className="search-button"> <FaSearch /></div>
                </div>
                <div className="login-basket">
                    <div className="login">
                        <VscAccount />
                        <p>Login</p>
                    </div>
                    <div className="basket">
                        <SlBasket />
                        <p>Səbət</p>
                    </div>
                </div>
            </div>
            <div className="nav-bar-header">
                <nav>
                    <ul>
                        <li>Haqqımızda<MdKeyboardArrowDown /></li>
                        <li>Bloq<MdKeyboardArrowDown /></li>
                        <li>Kampaniyalar<MdKeyboardArrowDown /></li>
                        <li>Dəstək<MdKeyboardArrowDown /></li>
                    </ul>
                </nav>
            </div>
            <div className="products-navbar">
                <p>Brendlər: </p>
                <nav>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                        <li>I</li>
                        <li>J</li>
                        <li>K</li>
                        <li>L</li>
                        <li>M</li>
                        <li>N</li>
                        <li>O</li>
                        <li>P</li>
                        <li>Q</li>
                        <li>R</li>
                        <li>S</li>
                        <li>T</li>
                        <li>U</li>
                        <li>V</li>
                        <li>W</li>
                        <li>X</li>
                        <li>Y</li>
                        <li>Z</li>
                    </ul>
                </nav>
                <p>Bütün brendlər</p>
            </div>
        </header>
    )
}
