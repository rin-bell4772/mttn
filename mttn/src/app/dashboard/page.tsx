import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';

export default function DashboardPage() {
    return (
        <div>
            <Nav isLoggedIn={true}/>
            <Dashboard />
            <Footer />
        </div>
    );
}