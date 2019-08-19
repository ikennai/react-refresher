// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Animation from './components/Animation';
import App from './components/App';
import Chart from './components/Chart';
import Error404 from './components/Error/404';
import Home from './components/Home';
import Numbers from './components/Numbers';
import Person from './components/Person';
import Timer from './components/Pomodoro';
import Todo from './components/Todo';
import Xss from './components/Xss';

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/animation" component={Animation} exact />
            <Route path="/chart" component={Chart} exact />
            <Route path="/numbers" component={Numbers} exact />
            <Route path="/person" component={Person} exact />
            <Route path="/pomodoro" component={Timer} exact />
            <Route path="/todo" component={Todo} exact />
            <Route path="/xss" component={Xss} exact />
            <Route component={Error404} />
        </Switch>
    </App>
);

export default AppRoutes;
