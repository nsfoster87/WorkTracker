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

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {currentView === 'login' && <Login changeView={changeView}/>}
      {currentView === 'signup' && <Signup changeView={changeView}/>}
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