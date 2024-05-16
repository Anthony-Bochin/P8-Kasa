import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/app/App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Card from './components/card/Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='mainContainer'>
        
        <Header/>        
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/Card/:id"  element={<Card />} />
            
            

          </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);



