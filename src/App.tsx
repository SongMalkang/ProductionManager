import './App.css'
import LoginPage from './pages/loginPage/LoginPage'

function App() {
  // ✨ 모바일 체크 => 아닐 시 Else Return
  
  // ✨ PC의 Return DOM
  return (
    <div className='ApplicationContainer'>
      <LoginPage />
    </div>
  )
}

export default App
