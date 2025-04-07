import React from 'react'
import components from "./links.json"

export default function SocialLinks({list}) {
    const export_list = list;
  return (
    <div className='social-links'>
    <h5>Follow us</h5>
        <ul className='links-social col-md-12 col-lg-6 col-xl-7 col-2xl-8'>
           {export_list.Social.map((element) => {return <li className='social-box'><img src={element.url} alt="social-icon"/></li>})}
        </ul>
  </div>
  )
}
