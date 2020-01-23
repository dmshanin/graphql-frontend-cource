// Core
import React from 'react';

// Hooks
import { useCustomerLogin } from './hooks/useCustomerLogin';

export const Login = () => {
  const { loading, error, handleChange, login, logInUser, values } = useCustomerLogin();

  if (loading) {
    return <p>Идет проверка пользователя...</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  const token = logInUser && logInUser.token

  if (token) {
    localStorage.setItem('token', token);
  }

  const userJSX = logInUser && (
    <p>Добро пожаловать!</p>
  );

  return (
    <>
      <h1>Login</h1>
      <input type='text' placeholder='username' name='username' onChange={handleChange} />
      <input type='password' placeholder='password' name='password' onChange={handleChange} />
      <button type='submit' onClick={login}>Login</button>
      { userJSX }
    </>
  );
};
