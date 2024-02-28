import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
      Login
      <button className={classes.myBtn}> Submit</button>
      <button className='myBtn'> Login Now</button>
      
    </div>
  )
}

export default Login;
