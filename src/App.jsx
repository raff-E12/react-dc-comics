import { useState } from 'react'
import react from "react"
import './App.css'
import Header from './assets/Header'
import Hero from './assets/Hero'
import Shop from './assets/Shop'
import Links from './assets/Links'
import Social from './assets/Social'
import ListComponets from "./components/links.json"

// Creazione della struttura principale del sito

function App() {
  return (
    <>
       <Header links={ListComponets} />
       <Hero links={ListComponets} />
       <Shop links={ListComponets}/>
       <footer className='footer-sc'>
        <Links links={ListComponets}/>
        <Social links={ListComponets}/>
       </footer>
    </>
  )
}

export default App
