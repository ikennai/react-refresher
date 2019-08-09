// Library imports
import React from 'react';
import PropTypes from 'prop-types';

// Image imports
import logo from '../../../shared/images/logo.svg';

const Header = props => {
    const {
        title = 'Learning React',
        url = 'http://localhost:3002'
    } = props;

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{ title }</h1>
        </header>
    );
};

// Set prop types
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;