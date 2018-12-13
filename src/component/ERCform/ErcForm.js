import React, { Component } from 'react';
import './ercForm.css';
import { Consumer } from '../../context/index';
import { NavLink } from 'react-router-dom';
import './ercForm.css'


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
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
  }

  render() {
    return (
      <div className="ercFormContainer">

        <div className="directoryContainer">
          <div className="col-sm-12">
            <p><strong>CREATE</strong><br />CONTRACT</p>
            <div className="line"></div>
          </div>

          <div className="col-xs-12 ercForm">
            <Consumer>
              {context => {
                return (
                  <div>
                    <div>
                      <form onSubmit={this.handleSubmit}>
                        <div>
                          <div className="form-row formSplit">
                            <div className="col-sm-6 splitInputForm">
                              <div className="form-group"><label>Token Name</label><input className="form-control inputBox"  type="text" id="text1" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>Token Symbol</label><input className="form-control inputBox"  type="text" id="text2" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>ICO Start Date</label><select className="form-control inputBox"  id="text3" onChange={this.handleChange}><optgroup label="This is a group"><option value="This is item 1" >This is item 1</option><option value="This is item 2">This is item 2</option><option value="This is item 3">This is item 3</option></optgroup></select></div>
                              <div
                                className="form-group"><label>ICO End Date</label><input className="form-control inputBox"  type="text" id="text4" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>Min CPA in ETH</label><input className="form-control inputBox"  type="text" id="text5" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>Tokens per ETH</label><input className="form-control inputBox"  type="text" id="text6" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>Max Token supply</label><select className="form-control inputBox" id="text7" onChange={this.handleChange}><optgroup label="This is a group"><option value="12" >This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                            <div className="col-sm-6 splitInputForm">
                              <div className="form-group"><label>Phase Name</label><input className="form-control inputBox" type="text" id="text8" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>Start Date</label><select className="form-control inputBox" id="text9" onChange={this.handleChange}><optgroup label="This is a group"><option value="12" >This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                              <div
                                className="form-group"><label>End Date</label><select className="form-control inputBox" id="text10" onChange={this.handleChange}><optgroup label="This is a group"><option value="12" >This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                              <div
                                className="form-group"><label>Max Token supply</label><input className="form-control inputBox" type="text" id="text11" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>Contract Address</label><input className="form-control inputBox" type="text" id="text12" onChange={this.handleChange} /></div>
                              <div className="form-group"><label>Notifier Private Key</label><input className="form-control inputBox" type="text" id="text13" onChange={this.handleChange} /></div>
                              <NavLink to="/create-contract"><br /><button className="btn btn-primary NextButtonStyle">Submit</button></NavLink>
                              {/* <button className="btn btn-primary NextButtonStyle">console</button> */}

                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )
              }}
            </Consumer>
          </div>
        </div>
      </div>
    );
  }
};


export default Form;
