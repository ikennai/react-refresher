// Library Imports
import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';

// Style Imports
import './Home.css';

const Home = (props) => {
    const { isMobile } = props;

    return (
        <div className="Home">
            <p>Hi! Ikenna here.</p>

            <p>This application is a collection of learning apps that I followed through from the React Cookbook. I wanted to start from beginning to end and brush up on my skills using React. The book has been pretty informative so far and I encourage you (if you haven't already) to take a look. Some of the samples are a little dated in areas but nothing has been incredibly hard to follow or modify with the latest updates in the React library / system.</p>
            <p>While you're here feel free to check out my app <em>Gin Scrummy</em> <small>(comming soon)</small></p>

            <p>
                You are using:
                <strong>{isMobile ? 'mobile' : 'desktop'}</strong>
            </p>

            <button
                style={{
                    backgroundColor: 'gray',
                    border: '1px solid black'
                }}
            >
                Click me!
            </button>
        </div>
    );
};

Home.propTypes = {
    isMobile: bool
};

function mapStateToProps(state) {
    return {
        isMobile: state.device.isMobile
    };
}

function mapDispatchToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
