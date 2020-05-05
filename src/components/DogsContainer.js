import React from 'react';
import DogsFilter from './DogsFilter';
import DogsList from './DogsList';
import { withDogConsumer } from '../context';
import Loading from './Loading';

const DogsContainer = ({ context }) => {
  const { loading, sortedDogs, dogs } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <DogsFilter dogs={dogs} />
      <DogsList dogs={sortedDogs} />
    </>
  );
};

export default withDogConsumer(DogsContainer);
