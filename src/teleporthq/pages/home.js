import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nexcel</title>
        <meta property="og:title" content="Nexcel" />
      </Helmet>
    </div>
  )
}

export default Home
