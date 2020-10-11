import React from 'react';
import './App.css';
import CheckmarkCircled from './icons/CheckmarkCircled';
import CrossCircled from './icons/CrossCircled';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <main>
      <div>Hello World</div>
      <CheckmarkCircled />
      <CrossCircled />
      <LoadingSpinner />
    </main>
  );
}

export default App;
