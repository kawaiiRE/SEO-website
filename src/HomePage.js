import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import About from './components/About'
import Services from './components/Services'
import Location from './components/Location'
import Contact from './components/Contact'
import { initGA } from './utils/analytics'
import SchemaMarkup from './schemaMarkup'

const HomePage = () => {
  // Initialize Google Analytics when the component mounts
  useEffect(() => {
    initGA()
  }, [])

  return (
    <>
      <Helmet>
        <title>HamsterPOS - Your Local Business Solution</title>
        <meta
          name='description'
          content='HamsterPOS offers solutions for local businesses, helping you grow and manage your operations effectively.'
        />
        <meta property='og:title' content='HamsterPOS' />
        <meta
          property='og:description'
          content='Your Local Business Solution.'
        />
        <meta
          property='og:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0RoB-BT_arIb_HYCYYny_vwXq5S3wgrzCA&s'
        />
        <meta property='og:url' content='http://localhost:3000' />
      </Helmet>
      <header>
        <h1>Welcome to HamsterPOS</h1>
      </header>
      <About />
      <Services />
      <Location />
      <Contact />
      <SchemaMarkup />
    </>
  )
}

export default HomePage
