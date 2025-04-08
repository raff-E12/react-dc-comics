import React, { useState } from 'react'
import Navlinks from '../components/Navlinks'

export default function Header(props) {
  const list_links = props.links;
  const [isOpen, SetOpen] = useState(false);
  return (
   <>
   <header className='header-sc container-flex-fluid col-sm-12 col-xxl-12' aria-label='Header-Section'>
      <div className='max-container-break'>
        <div className='icon-logo'>
        <img src="/img/dc-logo.png" alt="logo" title='Benvenuto' aria-label='logo'/>
      </div>
      <div className='nav-links-hd container-flex-fluid col-xxl-7 col-2xl-5 col-lg-3' aria-label='Header-Links-Nav'>
        <Navlinks list={list_links}/>
      </div>
      <div className='box-icon ham'>
          <i class="fa-solid fa-bars" onClick={()=>{SetOpen(value => !value)}}></i>
      </div>
      </div>
      <div className={`ham-box-left ${isOpen ? "show" : "aside"}`}>
         <div className='col-ham'>
            <i class="fa-solid fa-xmark" onClick={() => {SetOpen(value => !value)}}></i>
         </div>
         <Navlinks list={list_links}/>
      </div>
   </header>
   </>
  )
}