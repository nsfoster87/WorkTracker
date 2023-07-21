import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import HomeView from './HomeView.jsx';
import AnalyticsView from './AnalyticsView.jsx';
import IncomeView from './IncomeView.jsx';
import ProfileView from './ProfileView.jsx';
import BottomNavigationBar from './BottomNavigation.jsx';
import TopBar from './TopBar.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = isLoggedIn ? useState('home') : useState('login');
  const [userId, setUserId] = useState();

  const changeView = (view) => {
    setCurrentView(view);
  }; 

  return (
    <>
      {!isLoggedIn ? (
        <>
          {currentView === 'login' &&
            <Login
              setUserId={setUserId}
              setIsLoggedIn={setIsLoggedIn}
              changeView={changeView}
            />
          }
          {currentView === 'signup' &&
            <Signup
              setUserId={setUserId}
              setIsLoggedIn={setIsLoggedIn}
              changeView={changeView}
            />
          }
        </>
      ) : (
        <>
          {!['signup', 'login'].includes(currentView) && <TopBar />}
          {currentView === 'home' && <HomeView />}
          {currentView === 'income' && <IncomeView />}
          {currentView === 'analytics' && <AnalyticsView />}
          {currentView === 'profile' && <ProfileView />}
          {!['signup', 'login'].includes(currentView) &&
            <BottomNavigationBar currentView={currentView} changeView={changeView} />
          }
        </>
      )}
    </>
  );
};

export default App;