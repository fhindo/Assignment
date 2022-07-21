import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {useState} from "react"

import AllAuthers from './components/AllAuthers';
import NewAuther from './components/NewAuther';
import EditAuther from './components/EditAuther';

function App() {
  return (
    <div className="App">
      <h1>Favorite authers</h1>
      
      <Routes>
        <Route exact path ="/" element={<AllAuthers></AllAuthers>}></Route>
        <Route exact path ="/new" element={<NewAuther></NewAuther>}></Route>
        <Route exact path ="/edit/:id" element={<EditAuther></EditAuther>}></Route>
      </Routes>
    </div>
  );
}

export default App;
