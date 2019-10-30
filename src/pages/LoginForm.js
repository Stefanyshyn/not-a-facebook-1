import React, { useState, useCallback } from 'react';
import {
  Form, Input, Button, Alert,
} from 'reactstrap';
import faker from 'faker';
import UsersModel from '../modules/users';

const mockProfile = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: faker.internet.avatar(),
});

function LoginForm() {
  const [state, setState] = useState({
    username: '',
    password: '',
    isLogin: true,
    errLogin: { active: false, message: '' },
  });

  const toggleForm = useCallback(() => {
    const { isLogin } = state;
    setState((s) => ({ ...s, isLogin: !isLogin }));
    setState((s) => ({ ...s, errLogin: { active: false, message: '' } }));
  }, [state]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { username, password, isLogin } = state;
    try {
      if (isLogin) {
        UsersModel.login(username, password);
      } else {
        UsersModel.createAccount(username, password, mockProfile());
      }
      setState((s) => ({ ...s, errLogin: { active: false, message: '' } }));
    } catch (error) {
      setState((s) => ({ ...s, errLogin: { active: true, message: error } }));
    }
  }, [state]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  }, []);

  const onDismiss = useCallback(() => {
    setState((s) => ({ ...s, errLogin: { active: false, message: '' } }));
  }, []);

  const {
    username, password, isLogin, errLogin,
  } = state;
  return (
    <Form onSubmit={handleSubmit}>
      <Button type="button" onClick={toggleForm}>Toggle Form</Button>
      <Input type="text" name="username" value={username} onChange={handleChange} />
      <Input type="password" name="password" value={password} pattern="^(?=\w).{8,}$" onChange={handleChange} />
      <Button type="submit">{ isLogin ? 'Log In' : 'Create Account' }</Button>
      <Alert color="danger" isOpen={errLogin.active} toggle={onDismiss}>
        {errLogin.message.toString()}
      </Alert>
    </Form>
  );
}

export default LoginForm;
