// Library Imports
import React, { Component } from 'react';

// Style Imports
import './Home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Ikenna'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Ikenna Igwe'
            })
        }, 1000);
    }

    render() {
        return (
            <div className="Home">
                <h2>Welcome to Future Design Works</h2>
                <p>I'm the founder of the company, {this.state.name}.</p>

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
