import React from 'react';
import './App.css';
import Index from './pages/Index';
import StarWarsContextProvider from './components/StarWarsContextProvider';

function App() {
  return (
    <StarWarsContextProvider>
      <Index />
    </StarWarsContextProvider>
  );
}

export default App;
