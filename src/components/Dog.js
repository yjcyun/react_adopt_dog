import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import defaultImg from '../images/dog-1.jpg';

const Dog = ({ dog }) => {
  const { name, slug, breed, age, images, sex } = dog;

  return (
    <article className="dog">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="featured dog" />
        <Link to={`/dogs/${slug}`} className="btn-primary dog-link">Meet {name}</Link>
      </div>
      <div className="dog-text-container">
        <h3>{name}</h3>
        <span>
          {breed}
          <BsDot />
          {age > 1 ? `${age} years` : `${age}year`}<BsDot />
          {sex}
        </span>
      </div>
    </article>
  );
}

Dog.propTypes ={
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    sex: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.string.isRequired
  })
}



export default Dog;
