// Core
import React from 'react';

// Hooks
import { useCheckout, useQueryAllAvailablePets } from './hooks/useCheckout';

export const CheckoutPet = () => {
  const { checkOut, pet, loading, errors, error, handleChange } = useCheckout();
  const { loading: petsLoading, error: petsError, pets } = useQueryAllAvailablePets();

  if (loading) {
    return <p>Идет проверка пользователя...</p>;
  }

  if (petsLoading) {
    return <p>Loading...</p>;
  }

  if (petsError) {
    return (
      <p>We have a problem: {petsError.message}</p>
    );
  }

  const petsJSX = pets.map(({ id, name }, index) => (
    <option key={index} value={id}>{name}</option>
  ));

  const petJSX = pet && (
    <>
      <p>Id: { pet.id }</p>
      <p>Name: { pet.name }</p>
    </>
  );

  const errorsJSX = errors && (
    <p>
      We have a problem: {errors.message}
    </p>
  );

  const errorJSX = error && (
    <p>
      We have another problem: {error}
    </p>
  );

  return (
    <>
      <h1>Checkout</h1>
      <select name='petId' onChange={handleChange}>
          <option value=''>Select your pet</option>
          {petsJSX}
      </select>
      <button onClick={() => checkOut()}>CheckIn</button>
      {petJSX}
      {errorsJSX}
      {errorJSX}
    </>
  );
};
