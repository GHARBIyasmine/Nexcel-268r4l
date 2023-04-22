import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>page - Nexcel</title>
        <meta property="og:title" content="page - Nexcel" />
      </Helmet>
    </div>
  )
}

export default Page
