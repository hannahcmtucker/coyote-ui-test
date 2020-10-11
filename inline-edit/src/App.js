import React from 'react';
import './App.css';
import StatusIndicator from './components/StatusIndicator';

function App() {
  return (
    <main className="appwrapper">
      <div>Hello World</div>
      <StatusIndicator status={null} />
    </main>
  );
}

export default App;
