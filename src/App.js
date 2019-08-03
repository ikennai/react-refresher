import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const greetingTarget = `World`;
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Future Design Works - React Lab</h1>
            </header>
            <main>
                <section>
                    <img src="https://www.dev.education/images/logo.png" alt="DEV Education" />
                    <a href="http://www.drigwedds.com" target="_blank">Visit My Dentist</a>

                    <div>
                        Hello, { greetingTarget } <br />
                        I'm executing - { (() => console.log('>>> executed!'))() }. <br />
                        A function was { (() => `executed`)() }
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
