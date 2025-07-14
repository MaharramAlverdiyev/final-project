
import "./App.css"
import { useState, useEffect } from "react"
import gif from './assets/Components/Images/fragrances-logo.gif'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Man } from "./assets/Components/Pages/Man/Man"
import { HomePage } from "./assets/Components/Pages/Homepage/HomePage"
import { Woman } from "./assets/Components/Pages/Woman/Woman"
import Wishlist from "./assets/Components/Pages/Wishlist/wishlist"
import Basket from "./assets/Components/Pages/Basket/Basket"
import { DetailPage } from "./assets/Components/Pages/DetailPages/DetailPage"
import AdminPanel from "./assets/Components/Pages/AdminPanel/AdminPanel"
import Login from "./assets/Components/Pages/Login/Login"
import Signup from "./assets/Components/Pages/SignUp/SignUp"
import { Unisex } from "./assets/Components/Pages/Unisex/Unisex"



export const App: React.FC = () =>{

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <p className="p"><img src={gif} alt="" /></p>
          :
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/man-category" element={<Man/>}/>
                <Route path="/woman-category" element={<Woman/>}/>
                <Route path="/unisex-category" element={<Unisex/>}/>
                <Route path='/wishList' element={<Wishlist/>}/>
                <Route path='/your-basket' element={<Basket/>}/>
                <Route path="/product/:id" element={<DetailPage/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/SignUp" element={<Signup/>}/>
              </Routes>
            </BrowserRouter>

          </>
      }
    </div>
  )
}
