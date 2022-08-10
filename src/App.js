import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MatchingScreen from "./screens/discover/MatchingScreen.jsx";
import SignIn from "./screens/signIn/SignIn.jsx";
import EditProfile from "./screens/editProfile/EditProfile.jsx";
import UserMatches from "./screens/matches/UserMatches.jsx";
import HomePage from "./screens/home/HomePage.jsx";
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
