import React from 'react'
import about from '../../assets/aboutimage.png'
import './About.css'

const About = () => {
  return (
    <section id='about'>
        <div className="title">About Me</div>
             <div className='name'>
                <h2 >YOUSEF EL TRACH </h2>
              </div>  
            <div className="container">
            <div className='pic'>
                   <img src={about} alt="" />
                 </div>
                <p className='text'> As a full stack developer, I possess a broad range of technical skills and knowledge that allow me to develop and maintain both the front-end and back-end of a web application. My expertise includes knowledge of various programming languages, databases, and frameworks, which enable me to create web applications that are not only functional but also scalable and robust.</p>
          
        </div>
           
  
        
    </section>
  )
}

export default About