import '../Header/header.css';
import logo from "../../../Images/logo.png";
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import { FaTiktok, FaSearch, FaWhatsapp, FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { SlBasket } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../../../../redux/features/menuSlice';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProduct } from '../../../../redux/features/productSlice';

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const activeItem = useSelector((state) => state.menu.activeItem);
    const menuItems = useSelector((state) => state.menu.value);
    const products = useSelector((state) => state.product.value);

    const [searchQuery, setSearchQuery] = useState(""); // Arama sorgusu
    const [filteredProducts, setFilteredProducts] = useState([]);

    // İlk render sırasında ürünleri çek
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    // İlk harfe göre filtreleme
    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().startsWith(searchQuery.toLowerCase()) // İlk harfe göre filtreleme
        );
        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    return (
        <header>
            <div className="up-header">
                <a href=""><CiFacebook /></a>
                <a href=""><SlSocialInstagram /></a>
                <a href=""><LiaTelegram /></a>
                <a href=""><FaTiktok /></a>
            </div>
            <div className="down-header">
                <div onClick={() => navigate("/")} className="logo">
                    <img src={logo} alt="" />
                    <h1 className='logo-text'>QARABAGH <br /> PERFUMERY</h1>
                </div>
                <div className="search-bar-container">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Öz ətrini axtar..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ outline: 'none' }}
                        />
                        <div className="search-button"><FaSearch /></div>
                    </div>
                    {searchQuery && filteredProducts.length > 0 && (
                        <div className="search-results">
                            <ul>
                                {filteredProducts.map((product) => (
                                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}><li key={product.id}>{product.name}</li></Link>
                                ))}
                            </ul>

                        </div>
                    )}
                    {searchQuery && filteredProducts.length === 0 && (
                        <div className="search-results">
                            <p>Uyğun məhsul tapılmadı.</p>
                        </div>
                    )}
                </div>
                <div className="whatsapp-number">
                    <FaWhatsapp className='whatsapp-logo' />
                    <p className='whatsapp-text'>+994 55 527 53 56</p>
                </div>
                <div className="login-basket">
                    <div onClick={() => navigate("/wishlist")} className="favorite">
                        <FaRegHeart />
                        <p>Bəyəndiklərim</p>
                    </div>
                    <div className="login">
                        <VscAccount />
                        <p>Login</p>
                    </div>
                    <div onClick={() => navigate("/your-basket")} className="basket">
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
                            <li
                                className="nav-bar-header"
                                key={item.id}
                                onMouseEnter={() => dispatch(setActiveItem(item.id))}
                                onMouseLeave={() => dispatch(setActiveItem(null))}
                            >
                                <a href="">{item.title}</a>
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
    );
};
