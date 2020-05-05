import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DogContext } from '../context';
import defaultBcg from '../images/dog-9.jpg';
import StyledHero from '../components/StyledHero';
import { FaArrowLeft } from 'react-icons/fa';

class SingleDog extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  static contextType = DogContext;

  render() {
    const { getDog } = this.context;
    const dog = getDog(this.state.slug);

    if (!dog) {
      return (
        <div className="error">
          <h3>oops! something went wrong...</h3>
          <Link to='/dogs' className="btn-primary">
            back to adoptable dogs
          </Link>
        </div>
      );
    }

    const { name, age, sex, images, breed, energy, weight, health, description, children, catFriendly, dogFriendly } = dog;

    return (
      <>
        <StyledHero img={images[0]}>
        </StyledHero>
        <section className="single-dog">
          <div className="single-dog-name">
            <h1>Hello, I'm {name}</h1>
            <Link to="/" className="btn-primary">adopt me</Link>
            <Link to="/" className="btn-primary">sponsor me</Link>
          </div>

          <div className="single-dog-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>name: {name}</h6>
              <h6>breed: {breed}</h6>
              <h6>age: {age > 1 ? `${age} years old` : `${age} year old`}</h6>
              <h6>sex: {sex}</h6>
              <h6>energy level: {energy}</h6>
              <h6>weight: {weight} lbs</h6>
              <h6>Dog friendly: {dogFriendly ? "LOVES DOGS" : "NO DOGS"}</h6>
              <h6>cat friendly: {catFriendly ? "LOVES CATS" : "NO CATS"}</h6>
              <h6>children friendly: {children ? "LOVES CHILDREN" : "NO CHILDREN"}</h6>
            </article>
          </div>
        </section>
        <section className="dog-health">
          <h3>Health History</h3>
          <ul className="health">
            {health.map((item, index) => {
              return <li key={index}>-{item}</li>
            })}
          </ul>
        </section>
        <div className="single-dog-name" style={{ marginBottom: '5rem' }}>
          <Link to="/dogs" className="btn-primary" style={{ textAlign: "center" }}>
            <FaArrowLeft /> {' '}
            back to adoptable dogs
        </Link>
        </div>
      </>
    );
  }
}

export default SingleDog
