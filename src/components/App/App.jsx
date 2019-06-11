import React from 'react';
import AppProvider from '../AppProvider';
import Layout from '../Layout';

const App = () => {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
};

export default App;
