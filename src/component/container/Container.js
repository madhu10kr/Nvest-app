import React, { Component } from 'react';
import TdDasboard from '../tkDashboard/TdDashboard';
import './container.css';


class Container extends Component {
    render() {
        return (
            <div className="container1">
                <TdDasboard />
            </div>
        )
    }
}

export default Container;