import React, { useState } from 'react';
import { Auth as auth }  from '../firebase/Firebase.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Login successful');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('Registration successful');
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Login
      </Button>
      <Button variant="secondary" type="button" onClick={handleRegister}>
        Register
      </Button>
    </Form>
  );
};