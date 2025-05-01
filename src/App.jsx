import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Layout from './layout/layout'; 
import Home from './pages/home';  
const App = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
