import React, { Component } from 'react';
import '../styles/Operations.css'

class Operations extends Component {
   
    inputsPositiveButton=()=>{
        this.props.inputsPositiveButton()
    }
    inputsNegButton=()=>{
        this.props.inputsNegButton()
    }
    handleInputChange=(e)=>{
        this.props.handleInput(e);
    }
    render() {
        
        return (
            <div>
                <input type="number" className="amountInput" placeholder="enter your amount" onChange={this.handleInputChange}/>
                <input type="text" className="currencyInput" placeholder="enter your currency" onChange={this.handleInputChange}/>
                <input type="text" className="categoryInput" placeholder="enter your category" onChange={this.handleInputChange}/>
                <input type="text" className="vendorInput" placeholder="enter your vendor" onChange={this.handleInputChange}/>
                <a href="#" className="myButton" onClick={this.inputsPositiveButton}>Positive</a>
                <a href="#" className="myButton" onClick={this.inputsNegButton}>Deposit</a>
            </div>
        );
    }
}

export default Operations;