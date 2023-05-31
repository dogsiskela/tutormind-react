import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import RegisterScreen from './screens/Register/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterUser from "./screens/Register/RegisterUser";
import RegisterProfessor from "./screens/Register/RegisterProfessor";
import {Route, Routes} from 'react-router-dom';
import ProfileScreen from 'screens/ProfileScreen/ProfileScreen';
import Dashboard from 'screens/Dashboard/Dashboard';
import CreateCourse from 'screens/CreateCourse/CreateCourse';


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
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="courses/create" element={<CreateCourse/>}/>
            </Routes>
        </div>
    )
}

export default App;
