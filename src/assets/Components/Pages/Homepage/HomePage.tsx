import React from 'react'
import { Header } from './Header/Header'
import { SectionOne } from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import { SecThree } from './SectionThree/SecThree'
import { SectionFour } from './SectionFour/SectionFour'
import { Footer } from './Footer/Footer'
import './homepage.css'

export const HomePage = () => {
  return (
    <div>
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SecThree/>
        <SectionFour/>
        <Footer/>
    </div>
  )
}