import React from 'react';
import './storyCards.css';
import '../Hero/hero.css';
import { BsChevronRight } from 'react-icons/bs';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer'

function StoryCards() {
  return <div>
      <div className='story-card-container story-background border-bottom'>
        <div className='story-card story-flex'>
          <div className='content-card-container'>
            <div className='card-text card-text-padding-right story-flex'>
              <h1 className='card-title align-left'>
                Enjoy on your TV.
              </h1>
              <h2 className='card-subtitle align-left'>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </h2>
            </div>

            <div className='animation-container tv-container-small'>
              <img className="static-tv" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
              <video className='tv-video' autoPlay playsInline muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>
            </div>
          </div>
        </div>
      </div>

      <div className='story-card-container story-background border-bottom no-padding'>
        <div className='story-card story-flex'>
          <div className='content-card-container reverse-flex'>
            
            <div className='animation-container stranger-things-container-small'>
              <div className="stranger-things-container">
                <div className='download-bar'>
                  <img className='floating-image' alt="stranger-things" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
                  <div className='floating-text-box'>
                    <div className='top-text'>
                      Stranger Things
                    </div>
                    <div className='bottom-text'>
                      Downloading...
                    </div>
                  </div>
                  <img  className='download-icon' alt='download-gif' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' />
                </div>    
              </div>       
            </div>                                               

            <div className='card-text stranger-card-text'>
              <h1 className='card-title align-left'>
                Download your shows to watch offline.
              </h1>
              <h2 className='card-subtitle align-left'>
                Save your favorites easily and always have something to watch.
              </h2>
            </div>

          </div>
        </div>
      </div>

      <div className='story-card-container story-background border-bottom'>
        <div className='story-card story-flex'>
          <div className='content-card-container'>
            <div className='card-text'>
              <h1 className='card-title align-left'>
              Watch everywhere.
              </h1>
              <h2 className='card-subtitle align-left'>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
              </h2>
            </div>

            <div className='animation-container resize desktop-image-small'>
              <div className='computer-screen-container'>
                <img className='computer-screen' alt="computer-screen" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
                <video className='stranger-things-video' autoPlay playsInline muted loop 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='story-card-container story-background border-bottom'>
        <div className='story-card story-flex'>
          <div className='content-card-container reverse-flex'>
            <div className='animation-container resize for-kids-small'>
              <img alt="kids-avatars" className='kids-picture' src="https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" />
            </div>

            <div className='card-text'>
              <h1 className='card-title align-left'>
                Create profiles for kids.
              </h1>
              <h2 className='card-subtitle align-left'>
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className='story-card-container story-background border-bottom'>
        <div className='story-card'>
          <div>
            <h1>
              Frequently Asked Questions
            </h1>

            <div className='faq-container'>
              <FAQ />
            </div>

            <div className='form-container faq-get-started'>
              <h1 className='ready-to-watch'>Ready to watch? Enter your email to create or restart your membership.</h1>
              <div>
                <form className='get-started-form'>
                  <input className="get-started-input get-started-input-footer" type="email" placeholder="Enter email" />
                  <button className='get-started-button'>Get Started<BsChevronRight className='get-started-chevron'/></button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='story-card-container story-background border-bottom-bottom'>
        <div className='story-card'>
          <div className='footer-container'>
            <Footer />
          </div>
        </div>
      </div>
  </div>
}

export default StoryCards;
