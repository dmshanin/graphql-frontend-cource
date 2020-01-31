// Core
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationCheckOut = loader('./gql/mutationCheckOut.graphql');

// Queries
const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.graphql');

export const useCheckout = () => {
  const [_checkOut, { data, errors, loading }] = useMutation(mutationCheckOut);
  const [error, setError] = useState(false);

  const { form, handleChange } = useForm({
    petId: '',
  });

  const { petId } = form;

  const checkOut = () => {
    (async () => {
      try {
        if (petId === '') {
          throw new Error('Please, select your pet!');
        }

        await _checkOut({
          variables: {
            id: petId,
          },
        });
      } catch (error) {
        setError(error.message);
      }
    })();
  };

  const pet = data && data.checkOut.pet;

  return {
    checkOut,
    pet,
    loading,
    errors,
    error,
    handleChange,
  };
};

export const useQueryAllAvailablePets = () => {
  const { loading, error, data } = useQuery(queryAllAvailablePets);
  const pets = data ? data.allAvailablePets : null;

  return { loading, error, pets };
};
