import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>&copy; Future Design Works {(new Date()).getFullYear()}</footer>
        );
    }
}

export default Footer;