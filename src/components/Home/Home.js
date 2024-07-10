import React from 'react'
import Intro from './Introduction/Intro'

const Home = ({toggleTabs}) => {
  return (
    <div>
        <Intro toggleTabs={toggleTabs}></Intro>
    </div>
  )
}

export default Home