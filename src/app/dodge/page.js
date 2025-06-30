import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Feature from './Pages/Feature'
import Form from './Pages/Form'

function page() {
  return (
    <div className='relative'>
      <Home/>
      <Feature/>
      <Form/>
      <Navbar/>
    </div>
  )
}

export default page