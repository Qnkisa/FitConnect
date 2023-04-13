import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeGoals from '../components/HomeGoals'
import HomePartners from '../components/HomePartners'
import HomeUtility from '../components/HomeUtility'
import HomeFAQ from '../components/HomeFAQ'
import HomeTraction from '../components/HomeTraction'
import HomeTeam from '../components/HomeTeam'
import HomeRoadmap from '../components/HomeRoadmap'
import HomeCTA from '../components/HomeCTA'

export default function Home() {
  return (
    <div className='home'>
      <div className="background-container"></div>
      <HomeHero />
      <HomeGoals/>
      <HomePartners />
      <HomeUtility/>
      <HomeFAQ/>
      <HomeTraction />
      <HomeTeam />
      <HomeRoadmap />
      <HomeCTA />
    </div>
  )
}
