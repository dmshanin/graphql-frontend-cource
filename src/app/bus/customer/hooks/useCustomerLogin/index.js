import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useCustomerLogin = () => {
  const [loginUser, { data }] = useMutation(mutationLogin);
  const [values, setValues] = useState({
    account: {
      username: '',
      password: '',
    },
  });

  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const login = () => {
    const { account } = values;

    loginUser({
      variables: {
        username: account.username,
        password: account.password,
      },
    });
  };

  return {
    values,
    handleChange,
    login,
    logInUser: data && data.logIn,
  };
};
