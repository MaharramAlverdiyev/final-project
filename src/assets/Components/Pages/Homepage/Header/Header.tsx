import '../Header/header.css'
import logo from "../../../Images/logo.png"
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import { FaTiktok } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { SlBasket } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../../../../redux/features/menuSlice';
import { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



export const Header = () => {
        const navigate = useNavigate();

        const dispatch = useDispatch();
        const activeItem = useSelector((state) => state.menu.activeItem);
        const menuItems = useSelector((state) => state.menu.value);
        const [text, setText] = useState("");
        const [isDeleting, setIsDeleting] = useState(false);
        const [loopIndex, setLoopIndex] = useState(0);
        const [speed, setSpeed] = useState(50); 
        const phrases = ["Öz ətrini axtar..."];
      
        useEffect(() => {
          const handleTyping = () => {
            const currentPhrase = phrases[loopIndex % phrases.length];
      
            if (!isDeleting) {
              setText((prev) => currentPhrase.substring(0, prev.length + 1)); 
              if (text === currentPhrase) {
                setIsDeleting(true);
                setSpeed(50);
              }
            } else {
              setText((prev) => currentPhrase.substring(0, prev.length - 1));
              if (text === "") {
                setIsDeleting(false);
                setLoopIndex((prev) => prev + 1);
                setSpeed(50); 
              }
            }
          };
      
          const timer = setTimeout(handleTyping, speed);
      
          return () => clearTimeout(timer);
        }, [text, isDeleting, loopIndex, speed, phrases]);
      
    
    


    return (
        <header>
            <div className="up-header">
                <a href=""><CiFacebook /></a>
                <a href=""><SlSocialInstagram /></a>
                <a href=""><LiaTelegram /></a>
                <a href=""><FaTiktok /></a>
            </div>
            <div className="down-header">
                <div onClick={() => navigate("/")} className="logo" >
                    <img src={logo} alt="" />
                    <h1 className='logo-text' >QARABAGH <br /> PERFUMERY</h1>
                </div>
                <div className="search-bar">
                    <input readOnly value={text} style={{outline:'none'}}/>
                    <div className="search-button"> <FaSearch /></div>
                </div>
                <div className="whatsapp-number">
                <FaWhatsapp className='whatsapp-logo'/>
                <p className='whatsapp-text'>+994 55 527 53 56</p>
                </div>
                <div className="login-basket">
                    <div className="favorite">
                    <FaRegHeart />
                    <p>Bəyəndiklərim</p>
                    </div>
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
                <nav className="navbar-header">
                    <ul className='navbar-header-ul'>
                        {menuItems.map((item) => (
                            <li className="nav-bar-header"
                                key={item.id}
                                onMouseEnter={() => dispatch(setActiveItem(item.id))}
                                onMouseLeave={() => dispatch(setActiveItem(null))} 
                                
                            >
                                <a href="" >{item.title}</a>
                                {activeItem === item.id && (
                                    <div className="menuItems">
                                        <ul className='menuItems-ul'>
                                            {item.items.map((subItem, index) => (
                                                <li className='menuItems-li' key={index}>{subItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <p>Bütün brendlər</p>
            </div>
        </header>
    )
}
