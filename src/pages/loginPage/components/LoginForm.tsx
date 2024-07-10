import * as React from 'react';
import { useState, useEffect } from 'react';
import './loginCompStyle.css'
import CryptoJS from 'crypto-js';
import axios from 'axios';
import HancomLogo from '@/assets/logos/logo.png'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const encryptedPassword = CryptoJS.SHA256(password).toString();
    console.log(password, encryptedPassword)

    try {
      const response = await axios.post('/api/user/login', {
        username: username,
        password: encryptedPassword
      });

      if (response.data.success) {
        console.log('로그인 성공:', response.data);
      } else {
        console.log('로그인 실패:', response.data.message);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div className='FormMainContainer'>
      <div className='FormHeaderLogoBox'>
        <img src={HancomLogo} alt='CI' className='px-[2vw] py-[1vh] opacity-80' draggable={false} />
      </div>

      <div className='FormContentsBox'>
        <span className='FormSpanText'>아이디(ID)</span>
        <input
          className='FormInputBox'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className='FormSpanText'>비밀번호(PW)</span>
        <input
          className='FormInputBox'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='FormFooterButtonBox'>
        <button className='FormFooterButton bg-teal-500' onClick={handleLogin}>로그인</button>
        <button className='FormFooterButton bg-cyan-500'>대리점 회원가입</button>
        <span className='text-[1.25vh] text-zinc-400'>Note. 회원가입 요청 시, 관리자 승인 후 이용 가능합니다</span>
      </div>
    </div>
  );
}


export default LoginForm;