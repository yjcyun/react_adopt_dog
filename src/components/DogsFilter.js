import React from 'react';
import { useContext } from 'react';
import { DogContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
}

const DogsFilter = ({ dogs }) => {
  const context = useContext(DogContext);
  const { handleChange, breed, age, size, energy, sex } = context;

  let breeds = getUnique(dogs, 'breed');
  breeds = ['all', ...breeds];
  breeds = breeds.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  let ages = getUnique(dogs, 'age');
  ages = ages.sort((a, b) => a - b);
  ages = ['all', ...ages];
  ages = ages.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  let sizes = getUnique(dogs, 'size');
  sizes = ['all', ...sizes];
  sizes = sizes.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  let genders = getUnique(dogs, 'sex');
  genders = ['all', ...genders];
  genders = genders.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  let energyLvl = getUnique(dogs, 'energy');
  energyLvl = ['all', ...energyLvl];
  energyLvl = energyLvl.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  return (
    <section className="filter-container">
      <Title title="search dogs" />
      <form className="filter-form">

        {/* select breed */}
        <div className="form-group">
          <label htmlFor="breed">breed</label>
          <select
            name="breed"
            id="breed"
            value={breed}
            className="form-control"
            onChange={handleChange}>
            {breeds}
          </select>
        </div>
        {/* end of select breed */}

        {/* select age */}
        <div className="form-group">
          <label htmlFor="age">age - years</label>
          <select
            name="age"
            id="age"
            value={age}
            className="form-control"
            onChange={handleChange}>
            {ages}
          </select>
        </div>
        {/* end of select age */}

        {/* select size */}
        <div className="form-group">
          <label htmlFor="size">size</label>
          <select
            name="size"
            id="size"
            value={size}
            className="form-control"
            onChange={handleChange}>
            {sizes}
          </select>
        </div>
        {/* end of select size */}

        {/* select gender */}
        <div className="form-group">
          <label htmlFor="sex">gender</label>
          <select
            name="sex"
            id="sex"
            value={sex}
            className="form-control"
            onChange={handleChange}>
            {genders}
          </select>
        </div>
        {/* end of select gender */}

        {/* select goodwith */}
        <div className="form-group">
          <label htmlFor="energy">energy level</label>
          <select
            name="energy"
            id="energy"
            value={energy}
            className="form-control"
            onChange={handleChange}>
            {energyLvl}
          </select>
        </div>
        {/* end of select goodwith */}




      </form>
    </section>
  )
}

export default DogsFilter
