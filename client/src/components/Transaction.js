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
                 <div>amount: {transaction.amount}</div>
                 <div>category: {transaction.category}</div>
                 <div>vendor: {transaction.vendor}</div>
                 <img onClick={this.deleteTransaction} id="imgId" src='https://cdn-icons.flaticon.com/png/512/1627/premium/1627130.png?token=exp=1641397899~hmac=e76c3a054306b2610395fd4bc062e48a'></img>
             </div>
            
        );
    }
}

export default Transaction;