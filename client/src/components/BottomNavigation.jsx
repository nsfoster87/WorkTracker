import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, InsertChart, AttachMoney, Person } from '@mui/icons-material';

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-around'
      }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Income" icon={<AttachMoney />} />
      <BottomNavigationAction label="Analytics" icon={<InsertChart />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;