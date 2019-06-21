/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import stringNormalize from '../../helpers/stringNormalize';
import { AppContext } from '../AppProvider';
import './SearchBar.scss';

class SearchBar extends Component {
  state = {
    search: ''
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { search } = this.state;
    return search !== nextState.search;
  }

  handleChangeValue = e => {
    e.preventDefault();
    console.log(e.target.value);
    const { value } = e.target;
    this.setState({ search: value });
  };

  handleSearch = address => {
    const { search } = this.state;
    if (!search) return null;
    this.address = address;

    const addressStringsSplit = stringNormalize(`
        ${this.address.ADRES}, 
        ${this.address['KOD POCZTOWY']}
        ${this.address['MIEJSCOWOŚĆ']}`)
      .toLowerCase()
      .split(' ');

    const searchSplit = stringNormalize(search)
      .toLowerCase()
      .split(' ');
    let counterWordMatch = 0;
    let isAddressMatch = false;
    for (let i = 0; i < searchSplit.length; i++) {
      let wordMatch = false;
      for (let j = 0; j < addressStringsSplit.length; j++) {
        // Could be also !Number.isNaN(Number(searchSplit[i][0])
        if (addressStringsSplit[j].indexOf(searchSplit[i]) > -1) {
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
  };

  handleSubmit = event => {
    event.preventDefault();
    const { apiData, getSearchedData } = this.context;
    const findedAddressesInfo = apiData.filter(this.handleSearch);
    getSearchedData(findedAddressesInfo);
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control control--input">
              <Input
                className="input is-primary"
                placeholder="Podaj ulice i miasto (np. ul. Długa, Kraków)"
                type="text"
                onChangeValue={this.handleChangeValue}
                value={search}
              />
            </p>
            <p className="control">
              <Button type="Submit" name="Szukaj" />
            </p>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.contextType = AppContext;

export default SearchBar;
