
import './Footer.css';

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
                    <h4>İYDƏ PERFUMERY</h4>
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
                        <li>📞 +994 55 527 53 56</li>
                        <li>✉️ qarabaghperfume@gmail.com</li>
                        <li>🕒 09:00 – 23:00</li>
                    </ul>
                </div>
            </div>
            <div className="footer-subscribe">
                <h4>Bizə abunə olun</h4>
                <div className="down-footer">
                    <div className="subscribe-container">
                        <input type="email" placeholder="E-mail" />
                        <button>➤</button>
                    </div>
                    <div className="social-icons">
                        <span>📘</span>
                        <span>📸</span>
                        <span>🎥</span>
                        <span>🎵</span>
                    </div>
                    <div className="store-icons">
                        <button>App Store</button>
                        <button>Play Store</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

