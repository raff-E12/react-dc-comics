import React from 'react'

export default function Hero() {
  return (
    <section className='hero-sc' aria-label='Hero-Section'>
      <div className='container-flex text-hero col-md-6 col-2xl-12'>
        <h1>I Migliori SuperEroi:</h1>
      </div>
         <div class="container-hero">
        <div class="card">
        <div className='card-img'>
          <img src="/img/hero/Superman_logo.png" alt="Superman"/>
        </div>
        <div class="card-content">
            <h3 class="card-title">Superman</h3>
            <p class="card-description">Il supereroe che proviene da Krypton. Ha una forza incredibile e può volare.</p>
            <button class="card-btn">Scopri di più</button>
        </div>
        </div>
        <div class="card">
         <div className='card-img'>
           <img src="/img/hero/Batman_logo.png" alt="Batman"/>
         </div>
        <div class="card-content">
            <h3 class="card-title">Batman</h3>
            <p class="card-description">Un uomo senza superpoteri ma con una mente geniale e una forza di volontà implacabile.</p>
            <button class="card-btn">Scopri di più</button>
        </div>
        </div>
        <div class="card">
         <div className='card-img'>
           <img src="/img/hero/Wonderman_logo.png" alt="Wonder Woman"/>
         </div>
            <div class="card-content">
                <h3 class="card-title">Wonder Woman</h3>
                <p class="card-description">Una guerriera amazzone, dotata di forza straordinaria e abilità combattive.</p>
                <button class="card-btn">Scopri di più</button>
            </div>
        </div>
    </div>
    </section>
  )
}
