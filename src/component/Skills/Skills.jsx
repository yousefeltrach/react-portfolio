import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import bootstrap from '../../assets/bootstrap.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import php from '../../assets/php.png'
import laravel from '../../assets/laravel.png'
import sql from '../../assets/mysql.png'
import mongdb from '../../assets/mongodb.png'
import git from '../../assets/git.png'
import figma from '../../assets/figma.png'
import './Skills.css'

const Skills = () => {
  return (
    <section className='container' id='skills'>
      
      <div className="card" id="cardhtml">
                <div className="front">
                    <img src={html} alt="imgage" />
                </div>
                <div className="back">
                    <section id="html">

                    </section>
                    <main >
                        <h2 >75%</h2>
                    </main>
                </div>
            </div>

            <div className="card">
                <div className="front">
                    <img src={css} alt="imgage" />
                </div>
                <div class="back">
                    <section id="css">

                    </section>
                    <main>
                        <h2>70%</h2>
                    </main>
                </div>
            </div>

            <div className="card">
                <div className="front">
                    <img src={bootstrap} alt="imgage" />
                </div>
                <div className="back">
                    <section id="bootstrap">

                    </section>
                    <main>
                        <h2>70%</h2>
                    </main>
                </div>
            </div>

            <div className="card" >
                <div className="front">
                    <img src={js} alt="imgage" />
                </div>
                <div className="back">
                    <section id="javascript">

                    </section>
                    <main>
                        <h2>70%</h2>
                    </main>
                </div>
            </div>

            <div className="card" >
                <div className="front">
                    <img src={react} alt="imgage" />
                </div>
                <div className="back">
                    <section id="react">

                    </section>
                    <main>
                        <h2>60%</h2>
                    </main>
                </div>
            </div>

            <div className="card" >
                <div className="front">
                    <img src={php} alt="imgage" />
                </div>
                <div className="back">
                    <section id="php">

                    </section>
                    <main>
                        <h2>60%</h2>
                    </main>
                </div>
            </div>

            

            <div className="card" >
                <div className="front">
                    <img src={laravel} alt="imgage" />
                </div>
                <div className="back">
                    <section id="laravel">

                    </section>
                    <main>
                        <h2>65%</h2>
                    </main>
                </div>
            </div>

            <div className="card">
                <div className="front">
                    <img src={sql} alt="imgage" />
                </div>
                <div className="back">
                    <section id="mysql">

                    </section>
                    <main>
                        <h2>80%</h2>
                    </main>
                </div>
            </div>

            <div className="card">
                <div className="front">
                    <img src={mongdb} alt="imgage" />
                </div>
                <div className="back">
                    <section id="mongodb">

                    </section>
                    <main>
                        <h2>80%</h2>
                    </main>
                </div>
            </div>

            <div className="card">
                <div className="front">
                    <img src={git} alt="imgage" />
                </div>
                <div className="back">
                    <section id="git">

                    </section>
                    <main>
                        <h2>50%</h2>
                    </main>
                </div>
            </div>
            
            <div className="card">
                <div className="front">
                    <img src={figma} alt="imgage" />
                </div>
                <div className="back">
                    <section id="figma">

                    </section>
                    <main>
                        <h2>76%</h2>
                    </main>
                </div>
            </div>

    </section>
  )
}

export default Skills