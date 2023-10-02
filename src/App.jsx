// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './routes/MainRouter';
import MainLayout from './layouts/MainLayout';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <CartProvider>
    <MainLayout>
      <MainRouter/>
    </MainLayout>
    </CartProvider>
  )
} 

export default App
