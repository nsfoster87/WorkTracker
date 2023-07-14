import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Explore, Favorite } from '@mui/icons-material';

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
      sx={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Explore" icon={<Explore />} />
      <BottomNavigationAction label="Favorite" icon={<Favorite />} />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;