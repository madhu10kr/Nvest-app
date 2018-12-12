import React from 'react';
import { Consumer } from '../../context';
import './tdDashboard.css';
import {NavLink} from 'react-router-dom';

const TdDashboard = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <div className="row tdDashboard styleRow">
                        {
                            context.data.map((item) => {
                                return (
                                    <NavLink key={item.id} to={item.link} className="col-md-3 styleCol">
                                        <div className="svgicon">
                                            <img src={item.logo} className="svgiconstyle" alt={item.title} />
                                        </div>
                                        <div className="titleStyle">
                                            <p className="dashboardTitle">{item.title}</p>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                )
            }}
        </Consumer>
    );
};

export default TdDashboard;