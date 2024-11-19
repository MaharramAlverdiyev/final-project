import '../Header/header.css'
import { logo } from "../../Images/XARİBULBUL.png";

export const Header = () => {
    return (
        <>
        <header className="container">
            <div className="logo"><a href="http://127.0.0.1:5500/index.html">
                <div className="img">
                    <img src={logo} alt="" />
                </div>
                <div><h3>QARABAGH <br />PERFUMERY</h3></div>
            </a>
            </div>
            <nav>
                <ul>
                    <li><a href="" >ANA SƏHİFƏ</a></li>
                    <li><a href="" >BRENDLƏR</a></li>
                    <li><a href="" >HAQQIMIZDA</a></li>
                    <li><a href="" >ƏLAQƏ</a></li>
                </ul>
            </nav>
            <div className="icons">
                <input placeholder="Öz ətrini axtar!" />
                <a href="search"><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href="whatsapp"><i className="fa-regular fa-heart"></i></a>
                <a href="https://www.instagram.com/qarabaghperfume_az/"><i className="fa-solid fa-bag-shopping"></i></a>
            </div>
        </header>
        </>
    )
}
