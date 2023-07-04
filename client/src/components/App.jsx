import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('login');

  const switchView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === 'login' && <Login switchToSignup={() => switchView('signup')}/>}
      {currentView === 'signup' && <Signup switchToLogin={() => switchView('login')}/>}
    </>
  );
};

export default App;