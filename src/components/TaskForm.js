// src/components/TaskForm.js
import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ task, setTask, onAdd }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
      <TextField
        label="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Due Date"
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        InputLabelProps={{
          shrink: true,
        }}
        required
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={onAdd}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;