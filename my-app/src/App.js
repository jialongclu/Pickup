import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchingScreen from './screens/matchingScreen/MatchingScreen.jsx';
import './App.css';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <div className="App">
                <Router>
                    <Routes>
                        <Route
                            path="/matchingScreen"
                            element={<MatchingScreen />}
                        />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
