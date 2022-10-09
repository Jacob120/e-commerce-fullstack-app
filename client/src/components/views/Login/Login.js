// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Spinner from 'react-bootstrap/Spinner';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { API_URL } from '../../../config';
// import { logIn } from '../../../redux/usersRedux';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [login, setLogin] = useState('');
//   const [password, setPassword] = useState('');
//   const [status, setStatus] = useState(null); // null, 'loading, 'success', 'serverError', 'clientError'
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const saveJwtToken = (token, username, role) => {
//     sessionStorage.setItem('accessToken', token);
//     sessionStorage.setItem('userRole', role);
//     sessionStorage.setItem('username', username);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username: login, password }),
//     };
//     setStatus('loading');
//     fetch(`${API_URL}/auth/login`, options)
//       .then((res) => {
//         if (res.status === 201) {
//           res.json().then((data) => {
//             setStatus('success');
//             saveJwtToken(data.access_token, data.username, data.role);
//             dispatch(logIn({ login }));
//             setTimeout(() => {
//               navigate('/');
//             }, 3000);
//           });
//         } else if (res.status === 400) {
//           setStatus('clientError');
//         } else {
//           setStatus('serverError');
//         }
//       })
//       .catch((err) => {
//         setStatus('serverError');
//       });
//   };

//   return (
//     <Form className="col-12 col-sm-3 mx-auto my-5 pb-5" onSubmit={handleSubmit}>
//       <h1 className="my-4">Sign in</h1>
//       <p className="mb-3">
//         For demo purpose you can just sign in with login: JohnDoe and password:
//         test
//       </p>
//       {status === 'success' && (
//         <Alert variant="success">
//           <Alert.Heading>Success!</Alert.Heading>
//           <p>You have been successfully logged in!</p>
//         </Alert>
//       )}

//       {status === 'serverError' && (
//         <Alert variant="danger">
//           <Alert.Heading>Something went wrong...</Alert.Heading>
//           <p>Unexpected error.. Please try again!</p>
//         </Alert>
//       )}

//       {status === 'clientError' && (
//         <Alert variant="danger">
//           <Alert.Heading>Incorrect data</Alert.Heading>
//           <p>Login or password are incorrect.</p>
//         </Alert>
//       )}

//       {status === 'loading' && (
//         <Spinner animation="border" role="status" className="d-block mx-auto">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       )}
//       {status !== 'success' && (
//         <Form.Group>
//           <Form.Group className="mb-3" controlId="formLogin">
//             <Form.Label>Login</Form.Label>
//             <Form.Control
//               type="text"
//               value={login}
//               onChange={(e) => setLogin(e.target.value)}
//               placeholder="Enter login"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Sign in
//           </Button>
//         </Form.Group>
//       )}
//     </Form>
//   );
// };

// export default Login;
// test !!!

import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../redux/authApiSlice';
import { setCredentials } from '../../../redux/authSlice';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...userData, username }));
      setUser('');
      setPassword('');
      navigate('/');
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
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="login">
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Employee Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          value={username}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordInput}
          value={password}
          required
        />
        <button>Sign In</button>
      </form>
    </section>
  );

  return content;
};
export default Login;
