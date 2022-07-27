import React, { Component } from 'react';
import '../styles/Transaction.css'

class Transaction extends Component {
    deleteTransaction=()=>{
        this.props.deleteTransaction(this.props.transaction._id)
    }
    render() {
        let transaction=this.props.transaction
        return (
             <div id="transactionDesign">
                 <div><h3>amount: {transaction.amount} {transaction.Currency}</h3></div>
                 <div><h3>category: {transaction.category}</h3></div>
                 <div><h3>vendor: {transaction.vendor}</h3></div>
                 <img onClick={this.deleteTransaction} id="imgId" src='https://img.icons8.com/material-outlined/344/trash--v1.png'></img>
             </div>
            
        );
    }
}

export default Transaction;