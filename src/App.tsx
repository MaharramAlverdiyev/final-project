import { Header } from "./assets/Components/Pages/Homepage/Header/Header"
import "./App.css"
import { SectionOne } from "./assets/Components/Pages/Homepage/SectionOne/SectionOne"
import SectionTwo from "./assets/Components/Pages/Homepage/SectionTwo/SectionTwo"
import { Footer } from "./assets/Components/Pages/Homepage/Footer/Footer"
import { useState, useEffect } from "react"
import gif from './assets/Components/Images/fragrances-logo.gif'
import { SecThree } from "./assets/Components/Pages/Homepage/SectionThree/SecThree"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SectionFour } from "./assets/Components/Pages/Homepage/SectionFour/SectionFour"



export const App: React.FC = () =>{

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
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
                <Route path="/" element={<Header/>} />
              </Routes>
            </BrowserRouter>
                <SectionOne />
                <SectionTwo />
                <SecThree />
                <SectionFour/>
                <Footer />
          </>
      }
    </div>
  )
}
