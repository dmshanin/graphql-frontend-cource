// Core
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

// Queries
const queryAllCheckedOutPets = loader('./gql/queryAllCheckedOutPets.graphql');

export const useCheckin = () => {
  const [_checkIn, { data, errors, loading }] = useMutation(mutationCheckIn);
  const [error, setError] = useState(false);

  const { form, handleChange } = useForm({
    petId: '',
  });

  const { petId } = form;

  const checkIn = () => {
    (async () => {
      try {
        if (petId === '') {
          throw new Error('Please, select your pet!');
        }

        await _checkIn({
          variables: {
            id: petId,
          },
        });
      } catch (error) {
        setError(error.message);
      }
    })();
  };

  const pet = data && data.checkIn.pet;

  return {
    checkIn,
    pet,
    loading,
    errors,
    error,
    handleChange,
  };
};

export const useQueryAllCheckedOutPets = () => {
  const { loading, error, data } = useQuery(queryAllCheckedOutPets);
  const pets = data ? data.allCheckedOutPets : null;

  return { loading, error, pets };
};
