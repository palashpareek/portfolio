import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact/index'

function About() {
  return (
    <div className="about">

      <div className="about-top">

         <div  className="about-info">

         Hello There 👋, I am 
         <br /><span className="info-name">Palash Pareek</span>
         <br />currently working in TCS, 
         <br/>and an aspiring Full-Stack 
         <br />web developer.

         </div>


         <div  className="about-photo">
           <img src={require('../../../assets/coding.png').default} className="picture" />
         </div>
          
      </div>

      <div className="about-bottom">
          
      </div>
         <SocialContact />
    </div>
  )
}

export default About;
