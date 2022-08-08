import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MatchingScreen from './screens/matchingScreen/MatchingScreen.jsx';
import SignUp from './components/SignUp/SignUp.jsx'
import SignIn from "./components/SignIn/SignIn.jsx";
import EditProfile from './components/EditProfile/EditProfile.jsx';
import UserMatches from './components/UserMatches/UserMatches.jsx';
import "./App.css"
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserAsync } from './redux/users/thunks.js';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserAsync(window.localStorage.getItem('id')));
  // }, [])

  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/signUp" />} />
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
