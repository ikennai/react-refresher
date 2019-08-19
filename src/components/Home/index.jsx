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

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             name: 'Ikenna Igwe'
    //         })
    //     }, 1000);
    // }

    render() {
        return (
            <div className="Home">
                <p>Hey, {this.state.name} here.</p>
                <p>This application is a collection of learning apps that I followed through from the React Cookbook. I wanted to start from beginning to end and brush up on my skills using React. The book has been pretty informative so far and I encourage you (if you haven't already) to take a look. Some of the samples are a little dated in areas but nothing has been incredibly hard to follow or modify with the latest updates in the React library / system.</p>
                <p>While you're here feel free to check out my app <em>Gin Scrummy</em> <small>(comming soon)</small></p>

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
