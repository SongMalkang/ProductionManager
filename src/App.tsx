import './App.css'
import MainPage from './pages/MainPage'

function App() {
  // ✨ 모바일 체크 => 아닐 시 Else Return
  
  // ✨ PC의 Return DOM
  return (
    <div className='ApplicationContainer'>
      <MainPage />
    </div>
  )
}

export default App
