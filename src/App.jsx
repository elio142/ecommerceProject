import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Layout from './layout/Layout'; 
import Home from './pages/Home'; 
import TaskManager from './pages/TaskManager';
import Products from './pages/Products'; 
const App = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/products" element={<Products />} />  
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
