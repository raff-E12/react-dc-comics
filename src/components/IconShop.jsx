import React from 'react'
import components from "./links.json"

// importazione della lista di shop

export default function IconShop({list}) {
  const list_export = list;
  return (
    <ul className='icons-shop-sc container-flex-fluid col-md-6 col-xl-3 col-xl-12 col-2xl-7 col-xxl-8'>
        {list_export.Shop.map((element) =>{ return <li className='icon-shop'>
            <div className='shop-icon'>
                <img src={element.url} alt="Icons" draggable="false"/>
            </div>
            <h6>{element.title}</h6>
        </li>})}
    </ul>
  )
}
