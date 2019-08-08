import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Component Imports
import Header from './layout/Header/Header';
import Home from './Home/Home';

function App() {    
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}

export default App;
