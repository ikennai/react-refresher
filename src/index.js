import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

// Redux Store
import configureStore from './shared/redux/configureStore';

import * as serviceWorker from './serviceWorker';

// Routes
import AppRoutes from './routes';

// Configuring Redux Store
const store = configureStore(window.initialState);

// DOM
const rootElement = document.getElementById('root');

// App Wrapper
const renderApp = (Component) => {
    render(
        <Provider store={store}>
            <Router>
                <Component />
            </Router>
        </Provider>,
        rootElement
    );
};

// Rendering our App
renderApp(AppRoutes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
