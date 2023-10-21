import React from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const Auth = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
};

export default Auth;
