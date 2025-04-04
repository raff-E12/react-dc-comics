import React from 'react'

export default function Header() {
  return (
   <>
   <header className='header-sc container-flex-fluid col-sm-12 col-xxl-12' aria-label='Header-Section'>
      <div className='max-container-break'>
        <div className='icon-logo'>
        <img src="/img/dc-logo.png" alt="" title='Benvenuto' aria-label='logo'/>
      </div>
      <div className='nav-links-hd container-flex-fluid col-xxl-7 col-2xl-5 col-lg-3' aria-label='Header-Links-Nav'>
        <ul className='container-flex col-sm-12 list-nav'>
          <li><a href="#" className='links'>Charcters</a></li>
          <li><a href="#" className='links'>Comics</a></li>
          <li><a href="#" className='links'>Movies</a></li>
          <li><a href="#" className='links'>TV</a></li>
          <li><a href="#" className='links'>Games</a></li>
          <li><a href="#" className='links'>Collectibles</a></li>
          <li><a href="#" className='links'>Videos</a></li>
          <li><a href="#" className='links'>Fans</a></li>
          <li><a href="#" className='links'>News</a></li>
          <li><a href="#" className='links'>Shop</a></li>
        </ul>
      </div>
      <div className='box-icon ham'>
          <i class="fa-solid fa-bars"></i>
      </div>
      </div>
   </header>
   </>
  )
}
