import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';

import { CiUser } from 'react-icons/ci';
import { MdLockOutline } from 'react-icons/md';
import { useFormik } from 'formik';

import { Alert, IconButton } from '@mui/joy';

import React, { useState } from 'react';
import './login.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormLogin from './FromLogin';
import { Header } from '../Homepage/Header/Header';
import { Footer } from '../Homepage/Footer/Footer';

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [showError, setShowError] = useState({ name: true, password: true });
  const navigate=useNavigate()

  const submit = (values, actions) => {
    setTimeout(() => {
      axios.get("https://6744c25db4e2e04abea38787.mockapi.io/login")
        .then((res) => {
          const data = res.data;
          const matchedUser = data.find(
            (item) => item.name === values.name && item.password === values.password
          );
          localStorage.clear();
          localStorage.setItem(user,JSON.stringify(matchedUser));
          console.log("item=",matchedUser);
  
          if (matchedUser) {
            setLoginSuccess(true);
            actions.resetForm();
            navigate('/');
           
          } else {
            setLoginSuccess(false);
          }
        })
        .catch((error) => {
          console.error("API Error:", error);
          setLoginSuccess(false);
        });
    }, 500);
  };
  

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: FormLogin,
    onSubmit: submit,
  });

  const handleCloseError = (field) => {
    setShowError((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <>
    <Header/>
    <section className="card-Section">
      <div className="cardd backdrop-blur-lg bg-black/50 shadow-lg">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="type">
            <div className="user-name">
              <label htmlFor="name"><span>Username</span></label>
              <div className="input anime">
                <CiUser />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type your username"
                  value={values.name}
                  onChange={(e) => {
                    handleChange(e);
                    setShowError((prev) => ({ ...prev, name: true }));
                  }}
                  onBlur={handleBlur}
                />
              </div>
              {errors.name && touched.name && showError.name && (
                <Alert
                startDecorator={<WarningIcon />}
                variant="soft"
                color="danger"
                endDecorator={
                  <IconButton
                  variant="soft"
                  size="m"
                  color="danger"
                  onClick={() => handleCloseError('name')}
                  >
                      <CloseIcon />
                    </IconButton>
                  }
                  >
                  {errors.name}
                </Alert>
              )}
            </div>
            <div className="password">
              <label htmlFor="password"><span>Password</span></label>
              <div className="input">
                <MdLockOutline />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type your password"
                  value={values.password}
                  onChange={(e) => {
                    handleChange(e);
                    setShowError((prev) => ({ ...prev, password: true }));
                  }}
                  onBlur={handleBlur}
                  />
              </div>
              {errors.password && touched.password && showError.password && (
                <Alert
                startDecorator={<WarningIcon />}
                variant="soft"
                color="danger"
                endDecorator={
                  <IconButton
                  variant="soft"
                  size="m"
                  color="danger"
                  onClick={() => handleCloseError('password')}
                  >
                      <CloseIcon />
                    </IconButton>
                  }
                >
                  {errors.password}
                </Alert>
              )}
            </div>{loginSuccess === false && (
                    <Alert
                      startDecorator={<WarningIcon />}
                      variant="soft"
                      color="danger"
                      endDecorator={
                        <IconButton
                          variant="soft"
                          size="m"
                          color="danger"
                          onClick={() => setLoginSuccess(null)}
                        >
                          <CloseIcon />
                        </IconButton>
                      }
                    >
                      Username or password is not correct.
                    </Alert>
                  )}
          </div>
          <div className="button">
            <div className="forgot">
              <button type="submit">LOGIN</button>
            </div>
                  
          </div>
        </form>
        
        <div className="about">
          <div className="social-media">
          
          
            <div className="sign">
              <span onClick={()=>navigate("/SignUp")}>Or Sign Up</span>
            
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Login;