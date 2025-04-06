import React from 'react'
import Cards from '../components/Cards'

export default function Hero(props) {
  const list_import = props.links;
  return (
    <section className='hero-sc' aria-label='Hero-Section'>
      <div className='container-flex text-hero col-md-6 col-2xl-12' aria-label='Card-Section'>
        <h1>I Migliori SuperEroi:</h1>
      </div>
      <div class="container-hero">
        <Cards list={list_import} classCards="card"/>
      </div>
    </section>
  )
}