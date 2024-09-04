import React, { useState } from 'react';
import Settings from './components/Settings';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [language, setLanguage] = useState('English');

  return (
    <div className="App">
      <Settings setLanguage={setLanguage} />
      <Menu language={language} />
    </div>
  );
}

export default App;
