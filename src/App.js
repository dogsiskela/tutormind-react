import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import RegisterScreen from './screens/Register/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { Route, Routes } from 'react-router-dom';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="profile/:username" element={<ProfileScreen />} />
      </Routes>
    </div>
  )
}
export default App;
