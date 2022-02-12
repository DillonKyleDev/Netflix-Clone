import React from 'react';
import './hero.css';
import '../StoryCards/storyCards.css';
import { BsChevronRight } from 'react-icons/bs';
import Nav from '../Nav/Nav';

function Hero() {
  return <div>
    <div className='hero-container'>
      <div className="hero-image-container">
        <img  className="hero-image" src="https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/6f5bd0c3-b1c4-4881-bfcc-6ef2e0b24296/US-en-20220207-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
        srcset="https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/6f5bd0c3-b1c4-4881-bfcc-6ef2e0b24296/US-en-20220207-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, 
        https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/6f5bd0c3-b1c4-4881-bfcc-6ef2e0b24296/US-en-20220207-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, 
        https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/6f5bd0c3-b1c4-4881-bfcc-6ef2e0b24296/US-en-20220207-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""/>
        <div className='hero-gradient-top'></div>
      </div>
      <div>
      <Nav />
      <div className='main-story-card-container'>
        <div className='main-story-card'>
          <h1 className='main-card-title'>
              Unlimited movies, TV shows, and more.
            </h1>
            <h1 className='card-subtitle'>
              Watch anywhere. Cancel anytime.
            </h1>
            <div className='form-container'>
              <h1 className='ready-to-watch'>Ready to watch? Enter your email to create or restart your membership.</h1>
              <div>
                <form className='get-started-form'>
                  <input className="get-started-input" type="email" placeholder="Enter email" />
                  <button className='get-started-button'>Get Started<BsChevronRight className='get-started-chevron'/></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Hero;
