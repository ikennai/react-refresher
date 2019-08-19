// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Style imports
import './index.scss';

// Image imports
import logo from '../../../shared/images/logo.svg';

const Header = (props) => {
    const {
        title = 'React Refresher',
        url = 'http://localhost:3002'
    } = props;

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{ title }</h1>

            <ul className="navigation">
                <li className="navigation__item"><Link to="/">Home</Link></li>
                <li className="navigation__item"><Link to="/animation">Animation</Link></li>
                <li className="navigation__item"><Link to="/chart">Chart</Link></li>
                <li className="navigation__item"><Link to="/coins">Coins</Link></li>
                <li className="navigation__item"><Link to="/notes">Notes</Link></li>
                <li className="navigation__item"><Link to="/numbers">Numbers</Link></li>
                <li className="navigation__item"><Link to="/person">Person</Link></li>
                <li className="navigation__item"><Link to="/pomodoro">Pomodoro</Link></li>
                <li className="navigation__item"><Link to="/todo">Todo</Link></li>
                <li className="navigation__item"><Link to="/xss">Xss</Link></li>
            </ul>
        </header>
    );
};

// Set prop types
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;
