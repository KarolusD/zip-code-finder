/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    SearchBar.propTypes = {
      allAddressesInfo: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(address) {
    this.address = address;

    const { search } = this.state;
    const addressStringsSplit = `
        ${this.address.ADRES}, 
        ${this.address['KOD POCZTOWY']}
        ${this.address['MIEJSCOWOŚĆ']}`
      .toLowerCase()
      .split(' ');

    const searchSplit = search.toLowerCase().split(' ');
    let counterWordMatch = 0;
    let isAddressMatch = false;
    for (let i = 0; i < searchSplit.length; i++) {
      let wordMatch = false;
      for (let j = 0; j < addressStringsSplit.length; j++) {
        if (
          addressStringsSplit[j].indexOf(searchSplit[i]) > -1 ||
          !Number.isNaN(Number(searchSplit[i][0]))
        ) {
          wordMatch = true;
          counterWordMatch++;
          break;
        }
      }
      if (!wordMatch) break;
      if (counterWordMatch === searchSplit.length) isAddressMatch = true;
    }
    if (isAddressMatch) {
      return this.address;
    }
    return null;
  }

  handleSubmit(event) {
    event.preventDefault();

    const { allAddressesInfo } = this.props;
    const findedAddressesInfo = allAddressesInfo.filter(this.handleSearch);

    console.log(findedAddressesInfo);
  }

  handleChange(event) {
    event.preventDefault();

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          placeholder="Wpisz adres..."
          type="text"
          name="search"
          onChange={this.handleChange}
          value={search}
        />
        <button type="Submit">Szukaj</button>
      </form>
    );
  }
}

export default SearchBar;
