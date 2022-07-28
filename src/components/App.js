import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Events from "./Events";
import Photos from "./Photos";
import EBay from "./Photo-Components/EBay";
import Forms from "./Forms"
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";

import './css/app.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/events" element={ <Events /> } />
          <Route path="/photos" element={ <Photos /> } />
          <Route path="/photos/ebay" element={ <EBay /> } />
          <Route path="/forms" element={ <Forms /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
