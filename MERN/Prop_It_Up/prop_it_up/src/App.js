import React from 'react';
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className="App">
      <div id="personBox">
      <PersonCard firstName={"Doe"} lastName={"Jane"} age={"45"} hairColor={"Black"}></PersonCard>
      </div>
      <div id="personBox">
      <PersonCard firstName={"Smith"} lastName={"John"} age={"88"} hairColor={"Brown"}></PersonCard>
      </div>
      <div id="personBox">
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={"62"} hairColor={"Brown"}></PersonCard>
      </div>
    </div>
  );
}

export default App;
