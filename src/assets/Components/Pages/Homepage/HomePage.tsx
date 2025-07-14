import React from 'react'
import { Header } from './Header/Header'
import { SectionOne } from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import { SecThree } from './SectionThree/SecThree'
import { SectionFour } from './SectionFour/SectionFour'
import { Footer } from './Footer/Footer'
import './homepage.css'
import { SectionFive } from './SectionFive/SectionFive'

// import AdminPanel from "../AdminPanel/AdminPanel"

export const HomePage = () => {
  return (
    <div>
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SecThree/>
        <SectionFour/>
        <SectionFive/>
        <Footer/>
    </div>
  )
}
