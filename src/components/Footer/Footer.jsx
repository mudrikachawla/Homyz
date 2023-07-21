import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>
             <div className='flexColStart f-left'>
                <img src='./logo2.png' alt='' width={120}/>

                <span className='secondaryText'>
                    Our Vision is to make <br/>
                    best places to live for people
                </span> 
             </div>

             <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>California, USA</span>

                <div className='flexCenter f-menu'>
                    <span>Properties</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About</span>                    
                </div>
                  
             </div>
        </div>
    </section>
  )
}

export default Footer