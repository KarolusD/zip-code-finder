import React from 'react';
import SearchBar from '../SearchBar';

class ApiHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });

    fetch('./zipcodes.json', {
      headers: myHeaders
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { items, isLoaded, error } = this.state;
    return <SearchBar allAddressesInfo={isLoaded && !error && items} />;
  }
}

export default ApiHandler;
