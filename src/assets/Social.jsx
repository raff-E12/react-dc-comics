import React from 'react'
import SocialLinks from '../components/SocialLinks'

export default function Social({links}) {
    const export_links = links;
  return (
    <div className='social-ft container-flex-fluid' aria-label='Social-Footer-Links'>
        <button className='btn-ft-sign'>Sign-Up!</button>
        <SocialLinks list={export_links}/>
    </div>
  )
}