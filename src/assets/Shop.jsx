import React from 'react'
import IconShop from '../components/IconShop'

export default function Shop(props) {
  const import_list = props.links;
  return (
    <section className='shop-sc container-flex-fluid col-sm-12' aria-label='Shop-Section-Indication'>
     <IconShop list={import_list}/>
    </section>
  )
}