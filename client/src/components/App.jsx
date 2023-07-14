import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import BottomNavigationBar from './BottomNavigation.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('login');

  const switchView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === 'login' && <Login switchToSignup={() => switchView('signup')}/>}
      {currentView === 'signup' && <Signup switchToLogin={() => switchView('login')}/>}
      <BottomNavigationBar />
    </>
  );
};

export default App;