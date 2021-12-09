import React, {} from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Main />
            </Router>
        </>
    );
}

export default App;
