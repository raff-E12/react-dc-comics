import React from 'react'

export default function Header() {
  return (
   <>
   <header className='header-sc container-flex-fluid col-sm-12 col-xxl-12' aria-label='Header-Section'>
     <div className='icon-logo'>
      <img src="public/img/dc-logo.png" alt="" title='Benvenuto' aria-label='logo'/>
     </div>
     <div className='nav-links-hd container-flex-fluid col-xxl-7 col-2xl-5' aria-label='Header-Links-Nav'>
      <ul className='container-flex col-sm-12 list-nav'>
        <li><a href="#">Charcters</a></li>
        <li><a href="#">Comics</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Collectibles</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Fans</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
     </div>
   </header>
   </>
  )
}
