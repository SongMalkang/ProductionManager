import './styles/loginPageStyle.css'
import LoginForm from './components/LoginForm';
import { VERSION } from '../../version.ts';

interface LoginPageInterface {
  VERSION: string
}

const LoginPage: React.FC<LoginPageInterface> = () => {
  return (
    <div className='BaseContainer'>
      <div className='text-[2vh] text-zinc-200'>
        Hancom UbiMicro Software Production Manager
      </div>

      <div className='LoginBoxContainer'>
        <LoginForm />
      </div>

      <div className='text-[1.25vh] text-zinc-500'>
        Software Build Version : v{VERSION} _ By.JayH
      </div>
    </div>
  );
}

export default LoginPage;