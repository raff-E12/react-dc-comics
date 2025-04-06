import React from 'react'
import Cards from '../components/Cards'

export default function Hero() {
  return (
    <section className='hero-sc' aria-label='Hero-Section'>
      <div className='container-flex text-hero col-md-6 col-2xl-12' aria-label='Card-Section'>
        <h1>I Migliori SuperEroi:</h1>
      </div>
      <div class="container-hero">
        <Cards url={"/img/hero/Superman_logo.png"} title={"Superman"} description={"Il supereroe che proviene da Krypton. Ha una forza incredibile e può volare."}/>
        <Cards url={"/img/hero/Batman_logo.png"} title={"Batman"} description={"Un uomo senza superpoteri ma con una mente geniale e una forza di volontà implacabile."}/>
        <Cards url={"/img/hero/Wonderman_logo.png"} title={"Wonder Woman"} description={"Una guerriera amazzone, dotata di forza straordinaria e abilità combattive."}/>
      </div>
    </section>
  )
}