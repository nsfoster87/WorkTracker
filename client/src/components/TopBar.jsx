import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Add } from '@mui/icons-material';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [jobs, setJobs] = useState(['Job 1', 'Job 2']);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddJob = () => {
    console.log('adding new job');
    // setJobs([...jobs, newJob]);
  }

  const handleJobChange = (job) => {
    setSelectedJob(job);
    setAnchorEl(null);
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" align="center" onClick={handleMenuOpen} sx={{ cursor: 'pointer' }}>
            {selectedJob}
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {jobs.map(job => (
              <MenuItem key={job} onClick={() => handleJobChange(job)}>
                {job}
              </MenuItem>
            ))}
            <MenuItem onClick={handleAddJob}>
              <IconButton color="inherit" onClick={handleAddJob}>
                <Add />
              </IconButton>
              Add Job
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;