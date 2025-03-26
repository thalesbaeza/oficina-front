import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Cars from './pages/Cars';
import Customers from './pages/Customers';
import Transactions from './pages/Transactions';
import Parts from './pages/Parts';
import Suppliers from './pages/Suppliers';
import Inventory from './pages/Inventory';
export function App() {
  return <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </MainLayout>
    </Router>;
}