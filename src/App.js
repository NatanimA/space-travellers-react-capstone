import { Routes, Route } from 'react-router-dom';
import Myprofile from './components/Myprofile';
import NavBar from './components/NavBar';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exat path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
