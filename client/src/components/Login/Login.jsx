import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../Form/Form';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [_, setCookies] = useCookies(['access_token']);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      });
      setCookies('access_token', res.data.token);
      window.localStorage.setItem('userID', res.data.userID);
      navigate('/');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
    />
  );
};

export default Login;
