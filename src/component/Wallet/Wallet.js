import React, { Component } from 'react';
import './wallet.css';
import Modal from '../modal/modal';

class Wallet extends Component {
    state={
        bitcoin:false,
        Litecoin:false,
        Ethereum:false,
        card:false,
        enteredAmount:null,
        modalDisplay:false,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleChangeRadio = (e)=>{
        let val = e.target.id;
        if(this.state.val){
            this.setState({bitcoin:false,
                Litecoin:false,Ethereum:false,
                card:false,[e.target.id]:false
            })
        } else {
            this.setState({bitcoin:false,
                Litecoin:false,Ethereum:false,
                card:false,[e.target.id]:true
            })
        }
        
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            modalDisplay:true
        })
        console.log(this.state);
    }
    render() {
        return (
            <div className="wallet">
                <div className="col-sm-12 col-md-6 walletCB">
                    <div className="currenrBalanceContainer">
                        <span>Cuurent Balance</span><span className="walletAmount"><strong>$9121</strong></span>
                        <hr style={{ backgroundColor: "black", border: "1px solid #909090" }} />
                    </div>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <p>Amount to Add (USD)</p>
                        <input type="number" name="walletAmount" id="enteredAmount" className="form-control inputForm" onChange={this.handleChange} placeholder="Enter Amount" />
                        <br />
                        <div className="CCradio">
                            <label className="customLabelStyle"><input type="radio" name="payment" id="bitcoin" onChange={this.handleChangeRadio} /><span className="radioStyle">( Bitcoin )</span></label>
                            <label className="customLabelStyle"><input type="radio" name="payment" id="Litecoin" onChange={this.handleChangeRadio} /><span className="radioStyle">( Litecoin )</span></label>
                            <label className="customLabelStyle"><input type="radio" name="payment" id="Ethereum" onChange={this.handleChangeRadio} /><span className="radioStyle">( Ethereum )</span></label><br />
                            <label className="customLabelStyle"><input type="radio" name="payment" id="card" onChange={this.handleChangeRadio} /><span className="radioStyle">( Credit Card via Stripe )</span></label>
                        </div>
                        <div className="btnContainer" >
                            <button className="btn wPrevious">Previous</button>
                            <button className="btn wPurchase btn-success">Purchase</button>
                            {this.state.modalDisplay ? <Modal /> : ""}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Wallet;