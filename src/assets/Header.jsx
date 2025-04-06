import React from 'react'
import Navlinks from '../components/Navlinks'

export default function Header(props) {
  const list_links = props.links;
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
          <i class="fa-solid fa-bars"></i>
      </div>
      </div>
   </header>
   </>
  )
}