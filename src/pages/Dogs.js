import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import DogsContainer from '../components/DogsContainer';

const Dogs = () => {
  return (
    <>
      <Hero hero="dogsHero">
        <Banner
          title="adoptable dogs"
          banner="dogBanner">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <DogsContainer />
    </>
  )
}

export default Dogs;
