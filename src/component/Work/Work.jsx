import React from 'react'
import expo from '../../assets/expo.PNG'
import portfolio from '../../assets/portfolio.png'
import port from '../../assets/portfolio.png'
import  './Work.css'

const Work = () => {
  return (
    
    <section id='work' className='mywork'>
       
       <div className="cel1">
                <div className="web">
                    <a href="https://github.com/yousefeltrach/e-marketsexpo" target="_blank"><img src={expo} alt=""/></a>
                    <div className='main'>
                        {/* <h4  className='head'>Ecommerce website using html, css, js, laravel, mysql</h4> */}
                        <a href="https://github.com/nabilaithoummad/Laravel-Ecommerce-Website" className="btn btn-primary">Source Code</a>
                    </div>
                </div>
                <div className="web">
                    <a href=""><img src={portfolio} alt=""/></a>
                    <div className='main'>
                        {/* <h4 className='head'>Portfolio website for me </h4> */}
                        <a href="https://nabilaithoummad.github.io/" className="btn btn-primary">View demo</a>
                    </div>
                </div>
            </div>

            <div className="cel1">
                <div className="web" >
                    <a href="" target="_blank"><img src={port} alt=""/></a>
                    <div className='main'>
                        {/* <h4 className='head'>Portfolio website for a Graphic designer </h4> */}
                        <a href="" className="btn btn-primary">View demo</a>
                    </div>
                </div>
                <div className="web">
                    <section className="coming">
                        <h1 >Coming soon ...</h1>
                    </section>
                </div>
            </div>
            
    </section>
  )
}

export default Work