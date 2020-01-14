// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryAllCustomers = loader('./gql/queryAllCustomers.graphql');

export const useQueryAllCustomers = () => {
  const { loading, error, data } = useQuery(queryAllCustomers);

  const customers = data ? data.allCustomers : null;

  return { loading, error, customers };
};
