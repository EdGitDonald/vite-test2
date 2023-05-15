import { useState } from 'react'

import './App.css'
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'


function App() {
  const name = "Ed"
  
  return (
    <div>
      <Header />
      hello {name}
      <Homepage />
      <Footer />
    </div>
  )
}

export default App

