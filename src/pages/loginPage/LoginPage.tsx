import * as React from 'react';
import { useState, useEffect } from 'react';
import './styles/loginPageStyle.css'
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <div className='BaseContainer'>
      <div className='text-[2vh] text-zinc-300'>
        Hancom UbiMicro Software Production Manager
      </div>

      <div className='LoginBoxContainer'>
        <LoginForm />
      </div>

      <div>
        -
      </div>
    </div>
  );
}

export default LoginPage;