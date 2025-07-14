import './Footer.css';
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Ətirlər</h4>
                    <ul>
                        <li>Kişi ətirləri</li>
                        <li>Qadın ətirləri</li>
                        <li>Unisex ətirlər</li>
                        <li>Uşaq ətirləri</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>QARABAGH PERFUMERY</h4>
                    <ul>
                        <li>Bloq</li>
                        <li>Şirkət haqqında</li>
                        <li>Hədiyyə kartları</li>
                        <li>Hədiyyə paketləri</li>
                        <li>Öz ətirini yarat</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Dəstək</h4>
                    <ul>
                        <li>Sifariş etmək</li>
                        <li>Çatdırılma</li>
                        <li>Ödəniş</li>
                        <li>Loyallıq proqramı</li>
                        <li>Sual-cavab</li>
                        <li>İstifadə şərtləri</li>
                        <li>Məxfilik siyasəti</li>
                        <li>Bizimlə əlaqə</li>
                    </ul>
                </div>
                <div className="footer-column contact">
                    <h4>Əlaqə saxlamaq</h4>
                    <ul>
                        <li><IoCallOutline style={{fontSize:'20px'}}/> +994 55 527 53 56</li>
                        <li><IoMailOpenOutline style={{fontSize:'20px'}}/> qarabaghperfume@gmail.com</li>
                        <li><FaRegClock style={{fontSize:'20px'}}/> 09:00 – 23:00</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

