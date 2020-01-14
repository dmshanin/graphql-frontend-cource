// Core
import React from 'react';

// Hooks
import { useQueryAllCustomers } from './hooks/useQueryAllCustomers';

export const List = () => {
  const { loading, error, customers } = useQueryAllCustomers();

  if (loading) {
    return <p>Идет загрузка...</p>;
  }

  if (error) {
    return (
      <p>
          Ошибка: {error.message}
      </p>
    );
  }

  const customersJSX = customers.map(({ username, name, dateCreated }, index) => (
    <tr key={index}>
      <td>{username}</td>
      <td>{name}</td>
      <td>{dateCreated}</td>
    </tr>
  ));

  return (
    <>
      <h1>Customers</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Никнейм</th>
            <th scope='col'>Имя</th>
            <th scope='col'>Дата</th>
          </tr>
        </thead>
        <tbody>
          {customersJSX}
        </tbody>
      </table>
    </>
  );
};
