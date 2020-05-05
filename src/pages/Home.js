import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedDogs from '../components/FeaturedDogs';

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
        banner="defaultBanner"
          title="Adopt."
          title2="Don't Shop."
          subtitle="It's never too late to fall in love">
          <Link to="/dogs" className="btn-primary homepage">
            Adoptable Dogs
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedDogs />
    </>
  )
}

export default Home;
