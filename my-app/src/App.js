import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchingScreen from './screens/matchingScreen/MatchingScreen.jsx';
import SignUp from './components/SignUp/SignUp.jsx'
import SignIn from "./components/SignIn/SignIn.jsx";
import "./App.css"
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <div className="App">
        <Router>
          <Routes>
            <Route path="/matchingScreen" element={<MatchingScreen />} />
            <Route path="/signUp" element={<SignUp />}/>
            <Route path="/signIn" element={<SignIn />}/>
          </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;
