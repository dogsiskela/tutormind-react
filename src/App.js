import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import RegisterScreen from './screens/Register/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </div>
  )
}
export default App;
