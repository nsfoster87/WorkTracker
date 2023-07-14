import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import HomeView from './HomeView.jsx';
import AnalyticsView from './AnalyticsView.jsx';
import IncomeView from './IncomeView.jsx';
import ProfileView from './ProfileView.jsx';
import BottomNavigationBar from './BottomNavigation.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('login');

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === 'login' && <Login switchToSignup={() => changeView('signup')}/>}
      {currentView === 'signup' && <Signup switchToLogin={() => changeView('login')}/>}
      {currentView === 'home' && <HomeView />}
      {currentView === 'income' && <IncomeView />}
      {currentView === 'analytics' && <AnalyticsView />}
      {currentView === 'profile' && <ProfileView />}
      {!['signup', 'login'].includes(currentView) &&
        <BottomNavigationBar currentView={currentView} changeView={changeView} />
      }
    </>
  );
};

export default App;