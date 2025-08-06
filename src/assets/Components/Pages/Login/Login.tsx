import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import { CiUser } from 'react-icons/ci';
import { MdLockOutline } from 'react-icons/md';
import { useFormik } from 'formik';
import { Alert, IconButton } from '@mui/joy';
import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormLogin from './FromLogin';
import { Header } from '../Homepage/Header/Header';
import { Footer } from '../Homepage/Footer/Footer';

// 🔁 Redux login funksiyası
import { useDispatch } from 'react-redux';
import { login } from '../../../../assets/redux/features/authSlice'; // path uyğun düzəlt

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [showError, setShowError] = useState({ email: true, password: true });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (values, actions) => {
    console.log('Submit');
    
    setTimeout(() => {
      axios.get("https://6744c25db4e2e04abea38787.mockapi.io/login")
        .then((res) => {
          const data = res.data;
          const matchedUser = data.find(
            (item) => item.email === values.email && item.password === values.password
          );

          if (matchedUser) {
            setLoginSuccess(true);
            actions.resetForm();

            // ✅ Redux ilə login + localStorage
            dispatch(login({
              name: matchedUser.name,
              email: matchedUser.email,
            }));

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

  const {
    values, errors, touched,
    handleChange, handleSubmit, handleBlur
  } = useFormik({
    initialValues: {
      email: '',
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
      <Header />
      <section className="card-Section">
        <div className="cardd backdrop-blur-lg bg-black/50 shadow-lg">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="type">
              {/* E-mail Field */}
              <div className="user-name">
                <label htmlFor="email"><span>E-mail</span></label>
                <div className="input anime">
                  <CiUser style={{ fontSize: '32px' }} />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="E-maili daxil edin"
                    value={values.email}
                    onChange={(e) => {
                      handleChange(e);
                      setShowError((prev) => ({ ...prev, email: true }));
                    }}
                    onBlur={handleBlur}
                    style={{ border: '1px solid black', borderRadius: '20px' }}
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
                        onClick={() => handleCloseError('email')}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                  >
                    {errors.email}
                  </Alert>
                )}
              </div>

              {/* Password Field */}
              <div className="password">
                <label htmlFor="password"><span>Şifrə</span></label>
                <div className="input">
                  <MdLockOutline style={{ fontSize: '32px' }} />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Şifrənizi daxil edin"
                    value={values.password}
                    onChange={(e) => {
                      handleChange(e);
                      setShowError((prev) => ({ ...prev, password: true }));
                    }}
                    onBlur={handleBlur}
                    style={{ border: '1px solid black', borderRadius: '20px' }}
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
              </div>

              {/* Login uğursuzluq mesajı */}
              {loginSuccess === false && (
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
                  E-mail və ya şifrə yalnışdır.
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
                <span onClick={() => navigate("/SignUp")}>Or Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
