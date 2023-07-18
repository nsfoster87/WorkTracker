import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import HomeView from './HomeView.jsx';
import AnalyticsView from './AnalyticsView.jsx';
import IncomeView from './IncomeView.jsx';
import ProfileView from './ProfileView.jsx';
import BottomNavigationBar from './BottomNavigation.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === 'login' && <Login setIsLoggedIn={setIsLoggedIn} changeView={changeView}/>}
      {currentView === 'signup' && <Signup setIsLoggedIn={setIsLoggedIn} changeView={changeView}/>}
      {currentView === 'home' && <HomeView changeView={changeView} />}
      {currentView === 'income' && <IncomeView changeView={changeView} />}
      {currentView === 'analytics' && <AnalyticsView changeView={changeView} />}
      {currentView === 'profile' && <ProfileView changeView={changeView} />}
      {!['signup', 'login'].includes(currentView) &&
        <BottomNavigationBar currentView={currentView} changeView={changeView} />
      }
    </>
  );
};

export default App;