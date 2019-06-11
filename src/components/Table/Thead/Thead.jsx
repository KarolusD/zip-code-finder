import React from 'react';
import Th from '../Th';

const Thead = () => {
  return (
    <thead>
      <tr>
        <Th head="Adres" />
        <Th head="Kod pocztowy" />
        <Th head="Miejscowość" />
        <Th head="Powiat" />
        <Th head="Województwo" />
      </tr>
    </thead>
  );
};

export default Thead;
