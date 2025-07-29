import React from 'react'
import './Hero.css'
import profile from '../../assets/prof.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile} alt="" />
     <h1> Hello, <span> I'm Roshni Kumari</span> Web Designer.</h1>
     <p>I am a skilled and passionate web designer With experience in creating clean modern  and user-friendly websites.</p>
     <div className='hero-action'>
     <div className='hero-connect'><AnchorLink className='anchorlink' offset={50} href='#contact'>Hire me</AnchorLink></div>
     <div className='hero-resume'><a href="/ROSHNI-resume.pdf" > My resume </a></div>

     </div>
    </div>
  )
}

export default Hero