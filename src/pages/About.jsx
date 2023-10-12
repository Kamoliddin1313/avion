import React from 'react'
import { Route, Routes } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default About
