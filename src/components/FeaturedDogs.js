import React, { Component } from 'react'
import Title from './Title';
import { DogContext } from '../context';
import Loading from './Loading';
import Dog from './Dog';

class FeaturedDogs extends Component {
  static contextType = DogContext;

  render() {
    let { featuredDogs: dogs, loading } = this.context;

    dogs = dogs.map(dog =>
      <Dog key={dog.id} dog={dog} />
    );


    return (
      <section className="featured-dogs">
        <Title title="This week's" title2="featured dogs" />
        <div className="featured-dogs-center">
          {loading ? <Loading />: dogs}
        </div>
      </section>
    )
  }
}

export default FeaturedDogs;
