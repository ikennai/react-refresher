// Library Imports
import React, { Component } from 'react';

// Style Imports
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h2>Welcome to Future Design Works</h2>
                <p>This is the home component.</p>

                <button 
                    style={{
                        backgroundColor: 'gray',
                        border: '1px solid black'
                    }}
                >
                    Click me!
                </button>
            </div>
        )
    }
}

export default Home;