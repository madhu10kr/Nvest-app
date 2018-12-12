import React, { Component } from 'react';
import './createContract.css';
import Wallet from '../Wallet/Wallet';



class CreateContract extends Component {
    state = {
        hide: true,
        textArea:null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    toggleWallet = () => {
        this.setState({
            hide: false
        });
        console.log(this.state.textArea)
    }
    render() {
        return (
            <div className="directoryContainer">
                <div className="col-sm-12 top-container">
                    <p><strong>CREATE</strong><br />CONTRACT</p>
                    <div className="line"></div>
                </div>

                <div className="col-xs-12 createContract">
                    <div className="col-sm-12 col-md-6 CCaddress">
                        <p>Owner Ethereum Address</p>
                        <form>
                            <textarea className="form-control col-md-6 textArea" id="textArea" onChange={this.handleChange}></textarea>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-12 ">
                        <p className="CCcontent col-md-6">
                            You'll be charged $2,000 (USD). If there are enough funds in your wallet, we'll auto deduct balance otherwise you'll be redirected to wallet
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-12 btnContainer" >
                        <button className="btn CCprevious">Previous</button>
                        <button className="btn CCProceed" onClick={this.toggleWallet}>Proceed & Pay $2000 USD</button>
                    </div>

                    {this.state.hide ? '' : <Wallet />}

                </div>
            </div>
        );
    }
}

export default CreateContract;