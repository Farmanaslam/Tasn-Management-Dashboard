// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskDashboard from "./pages/TaskDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<TaskDashboard />} />
          {/* You can add more routes here, e.g., for Task Details */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
