import React, { Component } from 'react';
import Client from './Contentful';

const DogContext = React.createContext();

class DogProvider extends Component {
  state = {
    dogs: [],
    sortedDogs: [],
    featuredDogs: [],
    loading: true,
    breed: 'all',
    size: 'all',
    energy: 'all',
    sex: 'all',
    age: 'all'
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "adoptDog",
        order:"sys.createdAt"
      });
      let dogs = this.formatData(response.items);
      let featuredDogs = dogs.filter(dog => dog.featured === true);

      this.setState({
        dogs: dogs,
        sortedDogs: dogs,
        featuredDogs: featuredDogs,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData()
  };

  formatData = arr => {
    let tempData = arr.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => {
        return image.fields.file.url;
      });

      let dog = { ...item.fields, id: id, images: images };
      return dog;
    });
    return tempData;
  };

  getDog = slug => {
    let tempDogs = [...this.state.dogs];
    const dog = tempDogs.find(item => item.slug === slug);
    return dog;
  };

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    }, this.filterDogs);

  };

  filterDogs = () => {
    let { dogs, breed, age, size, energy, sex } = this.state;
    let tempDogs = [...dogs];

    // filter breed
    if (breed !== 'all') {
      tempDogs = tempDogs.filter(dog => dog.breed === breed);
      console.log(tempDogs);
    }

    // filter by age
    if (age !== 'all') {
      tempDogs = tempDogs.filter(dog => dog.age === age)
    }

    // filter by size
    if (size !== 'all') {
      tempDogs = tempDogs.filter(dog => dog.size === size)
    }

    // filter by gender
    if (sex !== 'all') {
      tempDogs = tempDogs.filter(dog => dog.sex === sex)
    }

    // filter by energy level
    if (energy !== 'all') {
      tempDogs = tempDogs.filter(dog => dog.energy === energy)
    }

    this.setState({
      sortedDogs: tempDogs
    });
  };



  render() {
    return (
      <DogContext.Provider value={{
        ...this.state,
        getDog: this.getDog,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </DogContext.Provider>
    );
  };
}

const DogConsumer = DogContext.Consumer;

export function withDogConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <DogConsumer>
        {value => <Component {...props} context={value} />}
      </DogConsumer>
    );
  }
}

export { DogProvider, DogContext, DogConsumer };
