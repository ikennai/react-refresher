import React, { Component } from 'react';
import Helmet from 'react-helmet';

// Asset imports
// import logo from './logo.svg';
import './App.css';

// Layout Component imports
import Content from './layout/Content/Content';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

// Component imports
import Animation from './Animation/Animation';
import Chart from './Chart/Chart';
import Home from './Home/Home';
import Numbers from './Numbers/Numbers';
import Person from './Person/Person';
import Todo from './Todo/Todo';
import Timer from './Pomodoro/Timer';
import Xss from './Xss/Xss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartType: 'line'
        };

        this.columns = [
            ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
            ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
            ['XRP', 100, 200, 300, 500, 400, 300],
        ];
    }

    setBarChart = () => {
        this.setState({
            chartType: 'bar'
        });
    }
    setLineChart = () => {
        this.setState({
            chartType: 'line'
        });
    }


    render() {
        return (
            <div className="App">
                <Header title="Learning React" />
                <Content>
                    <Helmet
                        title="Person Information"
                        meta={[
                            { name: 'title', content: 'Person Information' },
                            { name: 'description', content: 'This recipe talks about React' }
                        ]}
                    />
                    <Home />
                    <Person />
                    {/* <Xss /> */}
                    {/* <Numbers />

                    <Animation />

                    <Chart
                        columns={this.columns}
                        chartType={this.state.chartType}
                    />

                    <p>
                        Chart Type
                        <button onClick={this.setBarChart}>Bar</button>
                        <button onClick={this.setLineChart}>Line</button>
                    </p>

                    <Todo />
                    <Timer /> */}
                </Content>
                <Footer />
            </div>
        );
    }
}

export default App;
