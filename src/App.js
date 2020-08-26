import React from 'react';
import './App.css';
import Userform from './components/Userform';
import Globalstate from './contexts/Globalstate';



function App() {
  return (
    <div className="App">
        <Globalstate>
          <Userform/>
        </Globalstate>
    </div>
  );
}

export default App;
