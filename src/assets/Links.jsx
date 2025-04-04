import React from 'react'

export default function Links() {
  return (
    <div className='links-sc container-flex-fluid' aria-label='Links-Section-Footer'>
       <div className='max-container-break link-ft'>
        <aside className='col-sm-12 links-table col-md-7 col-lg-6 col-2xl-3'>
                <div className='links-tb'>
                <h4>DC Comics</h4>
                    <ul>
                        <li><a href="#">Charcters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div className='links-tb'>
                    <h4>DC</h4>
                    <ul>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy(News)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Concat Use</a></li>
                    </ul>
                </div>
                <div className='links-tb'>
                    <h4>Sites</h4>
                    <ul>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD Magazine</a></li>
                    <li><a href="#">DC Kids</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>
                <div className='links-tb'>
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>
                <div className='dc-shop-logo'>
                    <img src="/img/dc-logo-bg.png" alt="bg-logo"/>
                </div>
            </aside>
       </div>
    </div>
  )
}
