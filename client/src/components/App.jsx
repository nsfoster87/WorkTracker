import React, { useState } from 'react';
import Signup from './Signup.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('login');

  const switchView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === 'login' && <Login />}
      {currentView === 'signup' && <Signup />}
    </>
  );
};

export default App;