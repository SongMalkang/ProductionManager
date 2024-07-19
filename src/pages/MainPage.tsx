import * as React from 'react';
import { useState, useEffect } from 'react';
import './MainPageStyle.css'

import LoginPage from '../pages/loginPage/LoginPage'
import { VERSION } from '../version.ts';
import MenuPage from './menuPage/MenuPage.tsx';

const MainPage = () => {
  return (
    <div className='MainPageContainer'>
      {/* <MenuPage /> */}
      <LoginPage VERSION={VERSION} />
    </div>
  );
}

export default MainPage;