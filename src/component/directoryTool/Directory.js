import React, { Component } from 'react';
import './directory.css';
import direc from '../../image/direc.svg';
import card from '../../image/card.svg';
import profile from '../../image/profile.svg';
import resting from '../../image/resting.svg';
import {NavLink} from 'react-router-dom';

class Directory extends Component {
    render() {
        return (
            <div className="directoryContainer">



                <div className="col-sm-12">
                    <p><strong>NVEST DIRECTORY</strong><br />Tools</p>
                    <div className="line"></div>
                </div>



                <div className="row dirRow">
                    <div className="col-sm-3 innerColumn">
                        <div className="center">
                            <div className="dirSvg">
                                <img src={profile} style={{ width: "90px" }} alt="test"/>
                            </div>
                            <p className="dirTitle">Create a Nvest Profile</p>
                        </div>
                    </div>
                    <div className="col-sm-3 innerColumn">
                        <div className="center">
                            <div className="dirSvg">
                                <img src={direc} style={{ width: "90px" }} alt="test"/>
                            </div>
                            <p className="dirTitle">Select the directory you want to be listed on</p>
                        </div>
                    </div>
                    <div className="col-sm-3 innerColumn">
                        <div className="center">
                            <div className="dirSvg">
                                <img src={card} style={{ width: "90px" }} alt="test"/>
                            </div>
                            <p className="dirTitle">Pay the listing Fee + any paid inclusion fees</p>
                        </div>

                    </div>
                    <div className="col-sm-3 innerColumn">
                        <div className="center">
                            <div className="dirSvg">
                                <img src={resting} style={{ width: "90px" }} alt="test"/>
                            </div>
                            <p className="dirTitle">Sit Back and Relax</p>
                        </div>
                    </div>
                    <div className="col-sm-12" style={{ marginTop: "32px" }}>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6"><p align="center">Our Nvest Listing Aggregator is your one-stop solution for adding and managing
                    your Nvest profile across 150+  leading NVEST directories</p></div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12" style={{ marginTop: "24px" }}>
                    <p align="center"><strong>$595.00 – INCLUDES ALL FREE DIRECTORY LISTINGS</strong></p>
                </div>
                <div className="col-sm-12" style={{ marginTop: "24px" }}>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <p align="center">We charge $595.00 for this service which will auto-submit your ICO
                            Profile to 14 ICO directories which do not charge listing fee’s. The listings below
                            show the name and price that each site charges. Simply checkmark the ones you want to
                include in your order and click the “checkout” button below to continue.</p>
                        </div>
                    </div>
                    <div className="col-sm-12" align="center">
                        <NavLink to="/directory-submission">
                            <button className="btn btn-success getStarted">Get Started</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;