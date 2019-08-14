import React from 'react';

// Asset imports
// import logo from './logo.svg';
import './App.css';

// Layout Component imports
import Content from './layout/Content/Content';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

// Component imports
import Home from './Home/Home';
import Todo from './Todo/Todo';

function App() {    
    return (
        <div className="App">
            <Header title="Learning React" />
            <Content>
                <Home />
                <Todo />
            </Content>
            <Footer />
        </div>
    );
}

export default App;
