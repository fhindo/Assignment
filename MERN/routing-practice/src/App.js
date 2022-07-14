import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Num from './components/Num';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route exact path="/:id" element={<Num />}></Route>
        <Route exact path="/:id/:color1" element={<Num />}></Route>
        <Route exact path="/:id/:color1/:color2" element={<Num />}></Route>
      </Routes>
    </div>
  );
}

export default App;
