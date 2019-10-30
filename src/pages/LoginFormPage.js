import React, { useState, useCallback } from 'react';
import {
  Form, Input, Button, Alert,
} from 'reactstrap';
import faker from 'faker';
import { Link } from 'react-router-dom';
import UsersModel from '../modules/users';
import routes from '../routes';

const mockProfile = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: faker.internet.avatar(),
});

function LoginForm(props) {
  const [state, setState] = useState({
    username: '',
    password: '',
    errLogin: { active: false, msg: '' },
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { history, isLogin } = props;
    const { username, password } = state;
    try {
      if (isLogin) {
        UsersModel.login(username, password);
      } else {
        UsersModel.createAccount(username, password, mockProfile());
      }
      history.push(routes.feed);
    } catch (err) {
      setState((s) => ({ ...s, errLogin: { active: true, msg: err } }));
    }
  }, [state]);

  // handleLogOut = (e) => {
  //   e.preventDefault();
  //   UsersModel.logout(true);
  //   this.setState({ curUser: UsersModel.me() });
  // }

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  }, []);

  const { isLogin } = props;
  const {
    username, password, errLogin,
  } = state;
  return (
    <div>
      <h2 className="text-center">{isLogin ? 'Login' : 'Create an account'}</h2>
      <Form onSubmit={handleSubmit}>
        <div className="login-form">
          <Alert color="danger" isOpen={errLogin.active}>
            {errLogin.msg.toString()}
          </Alert>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            // pattern="^[a-z0-9_-]{3,15}$"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            // title="Для прикладу: 1Aaaaaaa"
            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            onChange={handleChange}
          />
          <Button
            className="login-form-submit"
            type="submit"
            color="secondary"
            disabled={!(username && password)}
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
          <div>
            {
              isLogin ? (
                <div>
                  Don&apos;t have an account? <Link to={routes.signUp}>Sign up</Link>
                  <br />
                  Forgot password? <Link to={routes.forgotPassword}>Reset password</Link>
                </div>
              ) : (
                <div>
                    Already have an account? <Link to={routes.login}>Login</Link>
                </div>
              )
            }
          </div>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
