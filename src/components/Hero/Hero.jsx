import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings flexCenter innerWidth hero-container'>
            <div className='flexCenter hero-right'>
                <div className='img-container'>
                    <img src='./hero-image.png' alt=""/>
                </div>
            </div>
            <div className='hero-left'>

            </div>
        </div>
    </section>
  )
}

export default Hero