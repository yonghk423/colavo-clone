import React, {useState, useEffect, useCallback} from 'react';
import styled from "styled-components"
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import SurgeryMenu from './routes/SurgeryMenu';
import DiscountMenu from './routes/DiscountMenu';

export type IsurgeryData = {
    name:string;
    price:number;
    count: number;
}

export type IdiscountData = {
  name:string;
  rate:number;
}

function App() {
  const [surgeryData, setSurgeryData] = useState<IsurgeryData[]>([]);
  const [disCountData, setDiscountData] = useState<IdiscountData[]>([]);
  const [cartItems, setCartItems] = useState([] as IsurgeryData[]);
  console.log(cartItems);
  console.log(disCountData);
  
  const handleAddToCart = (clickedItem:IsurgeryData) => {
    console.log(clickedItem);
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.name === clickedItem.name);

      if (isItemInCart) {
        return prev.map(item =>
          item.name === clickedItem.name
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, count: 1 }];
    });
  }

  const handleRemoveFromCart = (clickedItem:IsurgeryData) => {
    console.log(clickedItem.name);
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.name === clickedItem.name) {
          if (item.count === 1) return ack;
          return [...ack, { ...item, count: item.count - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as IsurgeryData[])
    );
  };

   useEffect(() => {
        getData()    
    }, [])
  const getData = async () => {
    try {
        const response = await axios.get("https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData")
        const resSurgeryData = await response?.data?.items;
        const surgeryData:any = Object.values({...resSurgeryData})
        const resDiscountData = await response?.data?.discounts;
        const discountData:any = Object.values({...resDiscountData})
        setSurgeryData(surgeryData);
        setDiscountData(discountData)
    } catch(err) {
        console.log("Error >>", err);
        }
    }

  return (
    <Layout>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addToCart={handleAddToCart} cartItems={cartItems} removeFromCart={handleRemoveFromCart} />}/>
          <Route path="/SurgeryMenu" element={<SurgeryMenu handleAddToCart={handleAddToCart} surgeryItems={surgeryData} />}/>
          <Route path="/DiscountMenu" element={<DiscountMenu discountItems={disCountData} />}/>                                
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  max-width: 36rem/* 576px */; 
  margin-left: auto;
  margin-right: auto;
`;