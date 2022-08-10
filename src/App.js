import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MatchingScreen from "./screens/matchingScreen/MatchingScreen.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import UserMatches from "./components/UserMatches/UserMatches.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/homePage" />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/matchingScreen" element={<MatchingScreen />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/UserMatches" element={<UserMatches />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
