import React, {Component} from 'react';

// Style imports
import './Animation.css';

class Animation extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        };
    }

    componentWillUpdate(newProps, newState) {
        console.log('>>> componentWillUpdate', newProps, newState);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('>>> getSnapshotBeforeUpdate', prevProps, prevState);
        console.log(this);

        if (!this.state.show) {
            document.getElementById('fade').style = 'opacity: 1;';
        } else {
            document.getElementById('fade').style = 'opacity: 0;';
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> componentDidUpdate', prevProps, prevState, snapshot);
    }

    toggleCollapse = () => {
        this.setState({
            show: !this.state.show 
        });
    }

    render() {
        console.log('>>> rendering');
        return (
            <div className="Animation">
                <button onClick={this.toggleCollapse}>
                    {this.state.show ? 'Collapse' : 'Expand'}
                </button>

                <div 
                    id="fade"
                    className={
                        this.state.show ? 'transition show' : 'transition'
                    }
                >
                    This text will disappear
                </div>
            </div>
        );
    }
}

export default Animation;