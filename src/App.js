import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import RegisterScreen from './screens/Register/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterUser from "./screens/Register/RegisterUser";
import RegisterProfessor from "./screens/Register/RegisterProfessor";
import {Route, Routes} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="register" element={<RegisterScreen/>}/>
                <Route path="login" element={<LoginScreen/>}/>
                <Route path="profile/:username" element={<ProfileScreen />} />
                <Route path="register/user" element={<RegisterUser/>}/>
                <Route path="register/professor" element={<RegisterProfessor/>}/>
            </Routes>
        </div>
    )
}

export default App;
