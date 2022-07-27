import React, { Component } from 'react';
import Transaction from '../components/Transaction';
import '../styles/Transactions.css'

class Transactions extends Component {
    render() {
        let transactions=this.props.transactions
        return (
            <div id="transaction-container">
             {transactions.map(transaction=>{
                return(
                    <div>
                         <Transaction key={transaction.id} transaction={transaction} deleteTransaction={this.props.deleteTransaction}/>
                    </div>
                )
            })}
             </div>
            
        );
    }
}

export default Transactions;