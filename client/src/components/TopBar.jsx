import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box,
  Dialog, DialogTitle, DialogContent, TextField, Button
} from '@mui/material';
import { Add } from '@mui/icons-material';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [jobs, setJobs] = useState(['Test Job 1', 'Test Job 2']);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [newJobName, setNewJobName] = useState('');
  const [isAddJobDialogOpen, setAddJobDialogOpen] = useState(false);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setAnchorEl(null);
  };

  const handleAddJobClick = () => {
    setAddJobDialogOpen(true);
    setAnchorEl(null);
  };

  const handleAddJobDialogClose = () => {
    setAddJobDialogOpen(false);
    setNewJobName('');
  }

  const handleAddNewJob = () => {
    if (newJobName.trim() !== '') {
      const newJob = newJobName.trim();
      setJobs([...jobs, newJob]);
      setSelectedJob(newJob);
    }
    handleAddJobDialogClose();
  }

  return (
    <>
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
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              {jobs.map(job => (
                <MenuItem key={job} onClick={() => handleJobClick(job)}>
                  {job}
                </MenuItem>
              ))}
              <MenuItem onClick={handleAddJobClick}>
                <IconButton>
                  <Add />
                </IconButton>
                Add New Job
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog open={isAddJobDialogOpen} onClose={handleAddJobDialogClose}>
        <DialogTitle>Add New Job</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Job Name"
            fullWidth
            value={newJobName}
            onChange={(e) => setNewJobName(e.target.value)}
          />
        </DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
          <Button onClick={handleAddJobDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddNewJob} color="primary">
            Add
          </Button>
        </Box>
      </Dialog>
    </>
  );
}

export default TopBar;