import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background font-body">
      <NavBar />
      <main className="pt-14">
        <Outlet />
      </main>
    </div>
  );
}