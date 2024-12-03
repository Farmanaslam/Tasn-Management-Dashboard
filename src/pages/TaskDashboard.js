// src/pages/TaskDashboard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, setFilter } from '../redux/taskSlice';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskFilters from '../components/TaskFilters';
import { Container } from '@mui/material';

const TaskDashboard = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  const handleAddTask = () => {
    if (task.title && task.dueDate) {
      dispatch(addTask({ ...task, id: Date.now(), completed: false }));
      setTask({ title: '', description: '', dueDate: '' });
    }
  };

  return (
    <Container>
      <h1>Task Management Dashboard</h1>
      <TaskForm task={task} setTask={setTask} onAdd={handleAddTask} />
      <TaskFilters setFilter={(filter) => dispatch(setFilter(filter))} />
      <TaskList />
    </Container>
  );
};

export default TaskDashboard;