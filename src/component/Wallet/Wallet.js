import React, { Component } from 'react';
import './wallet.css';
import Modal from '../modal/Modal';

class Wallet extends Component {
    state={
        enteredAmount:"",
        radioValue:"",
        modalDisplay:false,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleChangeRadio = (e)=>{
        this.setState({
            radioValue:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let selectedData = {enterdAmount:this.state.enteredAmount,radioValue:this.state.radioValue};
        this.setState({
            modalDisplay:true
        });
        console.log("selectedData", selectedData);
    }

    changeView=()=>{
        this.setState({
            modalDisplay:false
        })
    }

    render() {
        let {enteredAmount,radioValue} = this.state;
        const isEnabled = enteredAmount.length > 0 && radioValue.length > 0;
        return (
            <div className="wallet">
                <div className="col-sm-12  walletCB">
                    <div className="currenrBalanceContainer">
                        <span>Cuurent Balance</span><span className="walletAmount"><strong>$9121</strong></span>
                        <hr style={{ backgroundColor: "black", border: "1px solid #909090" }} />
                    </div>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <p>Amount to Add (USD)</p>
                        <input type="number" name="walletAmount" id="enteredAmount"  className="form-control inputForm" onChange={this.handleChange} placeholder="Enter Amount" />
                        <br />
                        <div className="CCradio">
                            <label className="customLabelStyle"><input type="radio"  name="payment" id="bitcoin" onChange={this.handleChangeRadio} /><span className="radioStyle">( Bitcoin )</span></label>
                            <label className="customLabelStyle"><input type="radio"  name="payment" id="Litecoin" onChange={this.handleChangeRadio} /><span className="radioStyle">( Litecoin )</span></label>
                            <label className="customLabelStyle"><input type="radio"  name="payment" id="Ethereum" onChange={this.handleChangeRadio} /><span className="radioStyle">( Ethereum )</span></label>
                            <label className="customLabelStyle"><input type="radio"  name="payment" id="card" onChange={this.handleChangeRadio} /><span className="radioStyle">( Credit Card via Stripe )</span></label>
                        </div>
                        <div className="btnContainer" >
                            <button className="btn btn-danger wPrevious">Previous</button>
                            <button className="btn btn-success wPurchase btn-success" disabled={!isEnabled}>Purchase</button>
                            {this.state.modalDisplay ? <Modal view={this.changeView} /> : ""}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Wallet;