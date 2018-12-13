import React, { Component } from 'react';
import './form.css';
import {NavLink} from 'react-router-dom';
import Modal from '../modal/modal';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
            text7: "",
            text8: "",
            text9: "",
            text10: "",
            text11: "",
            text12: "",
            text13: "",
            text14: "",
            text15: "",
            selectValue1: "",
            selectValue2: "",
            selectValue3: "",
            selectValue4: "",
            selectValue5: "",
            btnClick:false
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ btnClick: true });
        console.log(this.state);
    }

    render() {

        return (
            <div className="App">

                <div className="heading">
                    <h5 className="text-left">GET ICODASH</h5>
                    <h5 className="text-left">PLATFORM PRICING</h5>
                </div>
                <hr></hr>
                <div className="back-ground">
                    <div className="row">

                        <div className="column left">
                            <form className="text-left" onSubmit={this.handleSubmit}>
                                <div className="column1">
                                    <div>
                                        <label className="label">Deadline for completion</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text1" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Which currencies are you planning to accept as payment methods?</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text2" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Is your token already created?</label>
                                        <br />
                                        <select className="form-control rounded-0 border-0 w-100 p-2" onChange={this.handleChange} name="selectValue1">
                                            <option value="">Please Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Is yes, Enter token name:</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text3" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">What is your current Nvest website?</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text4" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Do you need new Nvest websites and landing pages designed as well?Do you need new Nvest websites and landing pages designed as well?</label>
                                        <br />
                                        <select className="form-control rounded-0 border-0 w-100 p-2" onChange={this.handleChange} name="selectValue2">
                                            <option value="">Please Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Cost vs perfection: How much reskinning and design do you require of our</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-4" name="text5" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Do you have a solname tech team or indivnameual in your organization?</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text6" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Will you require any custom features for your ICO campaign that we don'tnpmnn</label>
                                        <br />
                                        <select className="form-control rounded-0 border-0 w-100 p-2" onChange={this.handleChange} name="selectValue3">
                                            <option value="">Please Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">If yes, please describe them:</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-4" name="text7" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">What is the sub domain you want it hosted on?</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text8" onChange={this.handleChange}></input>
                                    </div>
                                </div>

                            </form>
                        </div>



                        <div className="column right">
                            <form className="text-left" onSubmit={this.handleSubmit}>
                                <div className="column2">
                                    <div className="form-group">
                                        <label className="label">Do you want it hosted on your servers </label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text9" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Do you need your ICO</label>
                                        <br />
                                        <select className="form-control rounded-0 border-0 w-100 p-2" onChange={this.handleChange} name="selectValue4">
                                            <option value="">Please Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Are you intrested in getting PR</label>
                                        <br />
                                        <select className="form-control rounded-0 border-0 w-100 p-2" onChange={this.handleChange} name="selectValue5">
                                            <option value="">Please Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">What is your initial token pricing?</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text10" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Do you need your ICO</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text11" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">What is your budget</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text12" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">What is your timeframe</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text13" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">What factor will impact</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text14" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">What is the best method</label>
                                        <br />
                                        <input type="text" className="form-control rounded-0 border-0 w-100 p-2" name="text15" onChange={this.handleChange}></input>
                                    </div>

                                    <div className="text-right">

                                        <div>
                                            <button>SUBMIT</button>
                                            {this.state.btnClick ? <Modal href="#popup1"/> : ""}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};


export default Form;
