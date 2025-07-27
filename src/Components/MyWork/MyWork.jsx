import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
    <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern}alt="" />
    </div>
    <div className="mywork-container">
        {mywork_data.map((work,index)=>(   
          <div className='project-card' key={index}>
             <img  src={work.image} alt="" className='project-image' />
            <div className='project-content'>
              <h3 className="project-title">{work.title}</h3>
              <p className="project-description">{work.description}</p>
              <div className='project-links'>
               <a href={work.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={work.demo} target="_blank" rel="noopener noreferrer">
                   Demo
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
    <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
    </div>

    </div>
  )
}

export default MyWork