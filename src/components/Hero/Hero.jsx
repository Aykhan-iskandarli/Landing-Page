import React from 'react'
import Button from '../Button/Button';
// import banner from "../../images/banner.png"

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="row">
        <div className="col-12">
          <div className="hero-content">
            <div className="container">
              <div className="row">
              <div className="hero-text">
                  <div className="col-6">
                  <div className="hero-tag">
                    <div className='hero-tag-div'><span className='new'>NEW!</span> <span>make your life easier with AI Technology</span></div>
                  </div>
                    <h1>Control EveryThing in your <span>Smart Home</span></h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      assumenda dolore totam natus qui cum vel omnis voluptates.
                    </p>
                  </div>
                  <Button className="primary-btn">Learn more</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero