import React from 'react';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes'
import Navbar from './Component/Navbar.jsx'
function App() {
  return (
    <div className="App">
      <Navbar />
      <PublicRoutes />
    </div>
  );
}

export default App;
