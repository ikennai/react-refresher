import React from 'react';
import { element } from 'prop-types';
// import Helmet from 'react-helmet';

// Asset imports
// import logo from './logo.svg';
import './App.css';

// Layout Component imports
import Content from './layout/Content/Content';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

// Component imports
// import Animation from './Animation/Animation';
// import Chart from './Chart/Chart';
// import Home from './Home';
// import Numbers from './Numbers/Numbers';
// import Person from './Person/Person';
// import Todo from './Todo/Todo';
// import Timer from './Pomodoro/Timer';
// import Xss from './Xss/Xss';

const App = (props) => (
    <div className="App">
        <Header title="Routing" />

        <Content>
            {props.children}
        </Content>

        <Footer />
    </div>
);

App.propTypes = {
    children: element
};

export default App;
