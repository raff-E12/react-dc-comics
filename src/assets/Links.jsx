import React from 'react'
import FooterLinks from '../components/FooterLinks'

export default function Links(props) {
    const list_links = props.links;
  return (
    <div className='links-sc container-flex-fluid' aria-label='Links-Section-Footer'>
       <div className='max-container-break link-ft'>
        <aside className='col-sm-12 links-table col-md-7 col-lg-6 col-2xl-3'>
            <FooterLinks list={list_links}/>
                <div className='dc-shop-logo'>
                    <img src="/img/dc-logo-bg.png" alt="bg-logo"/>
                </div>
            </aside>
       </div>
    </div>
  )
}