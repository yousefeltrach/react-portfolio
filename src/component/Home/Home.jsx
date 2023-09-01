import React from "react";
import Navebar from "./Navebar";
import what from '../../assets/whats.png'
import me from '../../assets/me.jpg'
import hello from '../../assets/hello.png'
import cv from '../../assets/YOUSEF EL TRACH.pdf'
import './Home.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const Home = () => {
  return (
    <section id="home" className="home-container">
      <Navebar/>
      <div className='hi'>
      <img src={hello} alt="hello" />
      <h5>Hello, I am</h5>
      <h1>YOUSEF EL TRACH</h1>
      <h5 className='text-light'>And I am a Full stack Developer</h5>
    </div> 

        <div className='me'>
          <img src={me} alt="me" />
        </div>


      <div className='whatsaap'>
          <a href="https://wa.me/+212668578393" target="_blank">
            <img src={what} alt="whatsapp" />
          </a>
        </div>
 

          <div className="main">  
                  
                  <a href="#contact" class="main-btn">Contact Me</a>
                  <a href={cv} download class="main-btn">Download Cv</a>  

                   {/* =======social-icons===== */}

        <div className='social-icons'>
          <p>Follow me</p>
          <a href="https://www.linkedin.com/in/yousefeltrach/" target='-blank'><BsLinkedin/></a>
          <a href="http://github.com/yousefeltrach" target='-blank'><FaGithub/></a>
          <a href="http://twitter.com/yousefeltrach" target='-blank'><AiFillTwitterCircle/></a>
          <a href="http://facebook.com/yousefeltrach" target='-blank'><FaFacebook/></a>
          <a href="http://instagram.com/usef_el_trach" target='-blank'><FaInstagramSquare/></a>
        </div>
                     
          </div>

    </section>
  )
}

export default Home