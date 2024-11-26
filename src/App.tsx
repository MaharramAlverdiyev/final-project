
import "./App.css"
import { useState, useEffect } from "react"
import gif from './assets/Components/Images/fragrances-logo.gif'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Man } from "./assets/Components/Pages/Man/Man"
import { HomePage } from "./assets/Components/Pages/Homepage/HomePage"
import { Woman } from "./assets/Components/Pages/Woman/Woman"



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
                <Route path="/" element={<HomePage/>}/>
                <Route path="/man-category" element={<Man/>}/>
                <Route path="/woman-category" element={<Woman/>}/>
              </Routes>
            </BrowserRouter>

          </>
      }
    </div>
  )
}
