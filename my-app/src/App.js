import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchingScreen from './screens/matchingScreen/MatchingScreen.jsx';
import SignUp from './screens/signUp/SignUp.jsx';
import Login from './screens/signUp/login/Login.jsx';
import './App.css';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<MatchingScreen />} />
                        <Route path="/match" element={<MatchingScreen />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
