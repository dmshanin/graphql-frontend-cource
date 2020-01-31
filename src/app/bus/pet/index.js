// Core
import React from 'react';

// Components
import { Counter } from './counter';
import { List } from './list';
import { SpecialList } from './specialList';
import { Profile } from './profile';
import { CheckinPet } from './checkinPet';
import { CheckoutPet } from './checkoutPet';

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <CheckinPet />
      <CheckoutPet />
      {/*<Profile />*/}
      {/*<Counter />*/}
      {/*<List />*/}
      {/*<SpecialList />*/}
    </>
  );
};
