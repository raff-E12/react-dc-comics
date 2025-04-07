import React from 'react'
import Cards from '../components/Cards'

export default function Hero(props) {
  const list_import = props.links;
  return (
    <>
     <div className='hero-box-wall'></div>
     <section className='hero-sc' aria-label='Hero-Section'>
      <div className='container-flex text-hero col-md-6 col-2xl-12' aria-label='Card-Section'>
        <h1>Scopri i Migliori Supereroi della DC:</h1>
      </div>
       <Cards list={list_import} classCards="card"/>
    </section>
    </>
  )
}