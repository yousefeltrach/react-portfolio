import React from 'react'
import logo from '../../assets/logo.png'
import './Navebar.css'

const Navebar = () => {
  return (
    <nav className="navigation">
      
      <div className="logo">   <img src={logo} alt="logo" /> </div>

      <div className="header">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a> 
        <a href="#contact">Contact</a>
      </div>

    </nav>
  )
}

export default Navebar