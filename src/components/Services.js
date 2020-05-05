import React, { Component } from 'react';
import { FaDog } from 'react-icons/fa';
import { GiHealthNormal, GiLovers } from 'react-icons/gi';
import { BsChatSquareQuote } from 'react-icons/bs';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
      { icons: <FaDog />, title: "Dog training", info: "we provide free dog training for the first 6 months" },
      { icons: <GiLovers />, title: "Match Finding", info: "Find your perfect fur-match" },
      { icons: <GiHealthNormal />, title: "Vaccinations", info: "Ours dogs are fully vaccinated and uto date with health examination" },
      { icons: <BsChatSquareQuote />, title: "Reposive client service", info: "We are here to help you find your best match" },
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Let us help you find your perfect" title2="fur-match" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Services
