import { useState } from 'react';
import Form from '../Form/Form';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
    />
  );
};

export default Register;
