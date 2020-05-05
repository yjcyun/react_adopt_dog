import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import Banner from '../components/Banner';

const Error = () => {
  return (
    <Hero hero="errorHero">
      <Banner banner="errorBanner" title="404" subtitle="Something went wronge. We're digging for a solution">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  )
}

export default Error
