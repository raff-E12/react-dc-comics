import React from 'react'

export default function Shop() {
  return (
    <section className='shop-sc container-flex-fluid col-sm-12' aria-label='Shop-Section-Indication'>
        <ul className='icons-shop-sc container-flex-fluid col-md-6 col-xl-3 col-xl-12 col-2xl-7 col-xxl-8'>
            <li className='icon-shop'>
                <div className='shop-icon'>
                    <img src="/img/buy-comics-digital-comics.png" alt="Icon" />
                </div>
                <h6>Digital Comics</h6>
            </li>
            <li className='icon-shop'>
                <div className='shop-icon'>
                    <img src="/img/buy-comics-merchandise.png" alt="Icon" />
                </div>
                <h6>DC Merchandise</h6>
            </li>
            <li className='icon-shop'>
                <div className='shop-icon'>
                    <img src="/img/buy-comics-subscriptions.png" alt="Icon" />
                </div>
                <h6>SubScription</h6>
            </li>
            <li className='icon-shop'>
                <div className='shop-icon'>
                    <img src="/img/buy-comics-shop-locator.png" alt="Icon" />
                </div>
                <h6>Comic Shop Locator</h6>
            </li>
            <li className='icon-shop'>
                <div className='shop-icon'>
                    <img src="/img/buy-dc-power-visa.svg" alt="Icon" />
                </div>
                <h6>DC Power Visa</h6>
            </li>
        </ul>
    </section>
  )
}
