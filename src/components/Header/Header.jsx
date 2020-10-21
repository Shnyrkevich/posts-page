import './header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './navigation/Navigation';

export default function Header() {
  return (
    <div className='header-container'>
      <NavLink className='header-container_app-title' to='/'> Hello, here some async requests </NavLink>
      <Navigation />
    </div>
  );
}