import React from 'react';
import styled from "styled-components"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import SurgeryMenu from './routes/SurgeryMenu';
import DiscountMenu from './routes/DiscountMenu';

const Layout = styled.div`
  width: 100%;
  max-width: 36rem/* 576px */; 
  margin-left: auto;
  margin-right: auto;
`;
function App() {
  return (
    <Layout>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SurgeryMenu" element={<SurgeryMenu />}/>
          <Route path="/DiscountMenu" element={<DiscountMenu />}/>                                
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
