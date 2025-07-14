import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import { CiUser } from 'react-icons/ci';
import { MdLockOutline } from 'react-icons/md';
import { useFormik } from 'formik';
import FormSign from './FormSign';
import { Alert, IconButton } from '@mui/joy';
import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Homepage/Footer/Footer';
import { Header } from '../Homepage/Header/Header';

const Signup = () => {
  const [showError, setShowError] = useState({ name: true, password: true, email: true });
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate=useNavigate()

  const submit = async (value, action) => {
    setApiError("");  
    
    try {
      const existingUsers = await axios.get("https://6744c25db4e2e04abea38787.mockapi.io/login");
      const usernameExists = existingUsers.data.some(user => user.name === value.name);
      
      if (usernameExists) {
        setApiError("This username already exists. Please choose a different one.");
        return;
      }
      const response = await axios.post("https://6744c25db4e2e04abea38787.mockapi.io/login", value);
      setSuccessMessage("You have successfully signed up! Please log in");
      setTimeout(() => navigate("/Login"), 1500);
      
      action.resetForm();
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setApiError("An error occurred during sign-up. Please try again later.");
    }
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: FormSign,
    onSubmit: submit,
  });

  return (
    <>
    <Header/>
    <section className="card-Section">
      <div className="cardd backdrop-blur-lg bg-black/50 shadow-lg">
        <h2>Sign Up</h2>
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
                      onClick={() => setShowError((prev) => ({ ...prev, name: false }))}
                    >
                      <CloseIcon />
                    </IconButton>
                  }
                >
                  {errors.name}
                </Alert>
              )}
            </div>
            <div className="email">
              <label htmlFor="email"><span>Email</span></label>
              <div className="input anime">
                <MdLockOutline />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type your email"
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                    setShowError((prev) => ({ ...prev, email: true }));
                  }}
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && touched.email && showError.email && (
                <Alert
                  startDecorator={<WarningIcon />}
                  variant="soft"
                  color="danger"
                  endDecorator={
                    <IconButton
                      variant="soft"
                      size="m"
                      color="danger"
                      onClick={() => setShowError((prev) => ({ ...prev, email: false }))}
                    >
                      <CloseIcon />
                    </IconButton>
                  }
                >
                  {errors.email}
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
                      onClick={() => setShowError((prev) => ({ ...prev, password: false }))}
                    >
                      <CloseIcon />
                    </IconButton>
                  }
                >
                  {errors.password}
                </Alert>
              )}
            </div>
          </div>
          <div className="button">
            <div className="forgot">
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>

        {apiError && (
          <div className="api-error">
            <Alert variant="soft" color="danger">
              {apiError}
            </Alert>
          </div>
        )}

        {successMessage && (
          <div className="success-message">
            <Alert variant="soft" color="success">
              {successMessage}
            </Alert>
          </div>
        )}

        <div className="about">
          <div className="social-media">
           
            <div className="sign">
              <span onClick={()=>navigate("/Login")}> I'm already a member Log In</span>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Signup;