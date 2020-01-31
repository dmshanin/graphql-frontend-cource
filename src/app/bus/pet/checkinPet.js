// Core
import React from 'react';

// Hooks
import { useCheckin, useQueryAllCheckedOutPets } from './hooks/useCheckin';

export const CheckinPet = () => {
  const { checkIn, pet, loading, errors, error, handleChange } = useCheckin();
  const { loading: petsLoading, error: petsError, pets } = useQueryAllCheckedOutPets();

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
      <h1>Checkin</h1>
      <select name='petId' onChange={handleChange}>
          <option value=''>Select your pet</option>
          {petsJSX}
      </select>
      <button onClick={() => checkIn()}>CheckIn</button>
      {petJSX}
      {errorsJSX}
      {errorJSX}
    </>
  );
};
