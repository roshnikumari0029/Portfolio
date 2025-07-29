import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import proflie from '../../assets/prof.jpeg'

const About = () => {
  return (
    <div id ='about' className='about'>
    <div className='about-title'>
      <h1>About Me</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={proflie} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi everyone, I am <span>Roshni Kumari</span> from <span> Jharkhand India.</span> I have completed B.Tech in computer science at RVSCET Jamshedpur.
                </p>
                
                <p>I love to do coding and making user friendly websites apart from this I like Playing Badminton game. </p>
                
                <p>I am a skilled and passionate web designer With experience in creating clean modern  and user-friendly websites.</p>


            </div>
            {/* <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>DSA</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}/></div>
            </div> */}
        </div>
    </div>
    

    </div>
  )
}

export default About