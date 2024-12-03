// src/components/TaskItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompletion, editTask } from '../redux/taskSlice';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ title: task.title, description: task.description, dueDate: task.dueDate });

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, updatedTask }));
    setIsEditing(false);
  };

  return (
    <Card style={{ margin: '10px 0' }}>
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              label="Title"
              value={updatedTask.title}
              onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
              required
            />
            <TextField
              label="Description"
              value={updatedTask.description}
              onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
            />
            <TextField
              label="Due Date"
              type="date"
              value={updatedTask.dueDate}
              onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <Button onClick={handleEdit}>Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <Typography variant="h5">{task.title}</Typography>
            <Typography color="textSecondary">{task.description}</Typography>
            <Typography color="textSecondary">Due: {task.dueDate}</Typography>
            <Button onClick={() => dispatch(toggleCompletion(task.id))}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </Button>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskItem;