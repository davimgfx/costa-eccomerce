import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='news-letter'>
            <h2>Newsletter</h2>
            <div className='news-letter-email'>
                <input type="email" placeholder='your@email.com' className='input'/>
                <button className='btn'>Subscribe</button>
            </div>
        </div>
        <div className='footer-links'>
            <a href="#">About</a>
            <a href="#">Store locator</a>
            <a href="#">FAQs</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
  )
}

export default Footer