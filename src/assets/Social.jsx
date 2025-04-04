import React from 'react'

export default function Social() {
  return (
    <div className='social-ft container-flex-fluid' aria-label='Social-Footer-Links'>
        <button className='btn-ft-sign'>Sign-Up!</button>
        <div className='social-links'>
            <h5>Follow us</h5>
            <ul className='links-social col-md-12 col-lg-6 col-xl-7 col-2xl-8'>
                <li className='social-box'>
                    <img src="/img/footer-facebook.png" alt="facebook-icon"/>
                </li>
                <li className='social-box'>
                    <img src="/img/footer-periscope.png" alt="facebook-icon"/>
                </li>
                <li className='social-box'>
                    <img src="/img/footer-pinterest.png" alt="facebook-icon"/>
                </li>
                <li className='social-box'>
                    <img src="/img/footer-twitter.png" alt="facebook-icon"/>
                </li>
                <li className='social-box'>
                    <img src="/img/footer-youtube.png" alt="facebook-icon"/>
                </li>
            </ul>
        </div>
    </div>
  )
}
