import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiHandler from '../ApiHandler';

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {
  state = {
    apiData: [],
    searchedData: []
  };

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    apiHandler('./zipcodes.json')
      .then(data =>
        this.setState({
          apiData: data
        })
      )
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  }

  render() {
    const { children } = this.props;
    const { apiData, searchedData } = this.state;
    console.log(apiData, searchedData, 'App Provider');
    return (
      <AppContext.Provider
        value={{
          apiData,
          searchedData,
          getSearchedData: data =>
            this.setState({
              searchedData: data
            })
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
