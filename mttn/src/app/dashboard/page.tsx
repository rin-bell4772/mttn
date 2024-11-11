import React from 'react';
import StudySet from '../components/StudySet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';


export default function DashboardPage() {
    return (
        <div>
            <Nav />
            <Dashboard />
            <Footer />
        </div>
    );
}