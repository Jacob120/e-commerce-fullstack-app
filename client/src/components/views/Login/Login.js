import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../redux/authApiSlice';
import { setCredentials } from '../../../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  console.log('username', username);
  console.log('psw', password);
  const saveJwtToken = (token, username) => {
    sessionStorage.setItem('accessToken', token);
    sessionStorage.setItem('username', username);
  };
  console.log(sessionStorage.getItem('accessToken'));

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ username, password }).unwrap();
      saveJwtToken(userData.access_token, userData.username);
      console.log('userData:', userData);
      dispatch(setCredentials({ ...userData, username }));
      setUsername('');
      setPassword('');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      console.log(err);
      console.log(errMsg);
    }
  };

  return (
    <Form className="col-12 col-sm-3 mx-auto my-5 pb-5" onSubmit={handleSubmit}>
      <h1 className="my-4">Sign in</h1>
      <p className="mb-3">
        For demo purpose you can just sign in with login: <b>JohnDoe</b> and
        password: <b>test</b>.
      </p>
      {isSuccess && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been successfully logged in!</p>
        </Alert>
      )}

      {isError && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Unexpected error.. Please try again!</p>
        </Alert>
      )}

      {isLoading && (
        <Spinner animation="border" role="status" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <Form.Group>
        <Form.Group className="mb-3" controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter login"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form.Group>
    </Form>
  );
};
export default Login;
