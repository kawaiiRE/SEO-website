import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './HomePage'
import './App.scss'

const App = () => (
  <HelmetProvider>
    <HomePage />
  </HelmetProvider>
)

export default App
