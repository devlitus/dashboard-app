import React from 'react';
import { RouterDashboard } from '../../routers/RouterDashboard';
import { Navbar } from '../navbar/Navbar';
import { Sidebar } from '../sidebar/Sidebar';
import './dashboard.css';

export const DashboardScreen = () => {
  return (
    <section className="wrapper">
      <header className="navbar">
        <Navbar />
      </header>
      <section className="box-logo">Logo</section>
      <nav className="sidebar">
        <Sidebar />
      </nav>
      <main className="content">
        <RouterDashboard />
      </main>
    </section>
  );
};
