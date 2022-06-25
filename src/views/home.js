import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>retool-shipping</title>
        <meta property="og:title" content="retool-shipping" />
      </Helmet>
      <iframe
        src="https://threadstudioatl.retool.com/embedded/public/cc5b4f4f-e7f9-48d5-9329-49c253336c56"
        allowFullScreen
        className="home-iframe"
      ></iframe>
    </div>
  )
}

export default Home
