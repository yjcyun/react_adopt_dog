import React from 'react';
import Dog from './Dog';

const DogsList = ({ dogs }) => {
  console.log(dogs.length);
  if (dogs.length === 0) {
    return (
      <div className="empty-search">
        <h3>Sorry, we could not find a perfect match for you.</h3>
      </div>
    );
  }

  return (
    <section className="dogslist">
      <div className="dogslist-center">
        {dogs.map(item => {
          return <Dog key={item.id} dog={item} />
        })}
      </div>
    </section>
  );
}

export default DogsList
