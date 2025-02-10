import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import Counter from '../pages/Counter';
import Cart from '../pages/Cart';
import Population from '../pages/Population';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/counter" element={<Counter />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/population" element={<Population/>} />
  </Routes>
);

export default AppRoutes;
