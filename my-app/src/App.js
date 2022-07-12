import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchingScreen from './screens/matchingScreen/MatchingScreen.jsx';
import SignUp from './components/SignUp/SignUp.jsx'
import SignIn from "./components/SignIn/SignIn.jsx";
import EditProfile from './components/EditProfile/EditProfile.jsx';
import "./App.css"
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserAsync } from './redux/users/thunks.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync('62cce16fbbd30b718df04804'));
  }, [])

  return (
    <>
      <NavBar />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/matchingScreen" element={<MatchingScreen />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/EditProfile" element={<EditProfile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
