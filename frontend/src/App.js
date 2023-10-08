// E:\programming\Project\ph-predictor\frontend\src\App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import DownloadComponent from './components/csvDownload';
import PredictorComponent from './components/PredictorComponent'; 
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>人工知能によるフィリピン株価予測</p>
            <Routes>
              <Route path="/csvDownload" element={<DownloadComponent />} />
              <Route path="/" element={<PredictorComponent />} /> {/* この行を変更しました */}
            </Routes>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
