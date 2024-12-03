// src/components/TaskFilters.js
import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

const TaskFilters = ({ setFilter }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => setFilter('all')}>All Tasks</Button>
      <Button onClick={() => setFilter('completed')}>Completed Tasks</Button>
      <Button onClick={() => setFilter('pending')}>Pending Tasks</Button>
      <Button onClick={() => setFilter('overdue')}>Overdue Tasks</Button>
    </ButtonGroup>
  );
};

export default TaskFilters;