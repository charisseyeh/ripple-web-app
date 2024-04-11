import React from 'react';
import './App.css';
import RippleEffect from './RippleEffect'; // Import the RippleEffect component

function App() {
  return (
    <div className="App">
      <RippleEffect /> {/* Only the RippleEffect component is rendered to isolate the animation */}
    </div>
  );
}

export default App;
