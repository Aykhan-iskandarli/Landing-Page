import React from 'react'
import AboutComp from '../components/AboutComponent/AboutComp'
import Growth from '../components/Growth/Growth'
import Hero from '../components/Hero/Hero'
import Partner from '../components/Partners/Partner'
import Team from '../components/Team/Team'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Growth/>
        <AboutComp/>
        <Team/>
        <Partner/>
    </div>
  )
}

export default Home