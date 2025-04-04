import { useState } from 'react'
import react from "react"
import './App.css'
import Header from './assets/Header'
import Hero from './assets/Hero'
import Shop from './assets/Shop'
import Links from './assets/Links'
import Social from './assets/Social'


function App() {
  return (
    <>
       <Header/>
       <Hero/>
       <Shop/>
       <footer className='footer-sc'>
        <Links />
        <Social/>
       </footer>
    </>
  )
}

export default App
