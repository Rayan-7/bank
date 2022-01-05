import React, { Component } from 'react';
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
const axios=require('axios')
class App extends Component {
  constructor() {
    super()
      this.state={
        transaction:[],
        inputs:{
        amountInput:"",
        categoryInput:"",
        vendorInput:""
        }
      }
}
async getTransaction() {
  return axios.get("http://localhost:4000/transactions")
}
async componentDidMount() {
  const transaction = await this.getTransaction()
  this.setState({ transaction:transaction.data })
}

handleInput=(e)=>{
  let tempInputs = {...this.state.inputs}
 tempInputs[e.target.className] = e.target.value

  this.setState({inputs : tempInputs})
}


inputsPositiveButton=()=>{
  let transaction=this.state.inputs
  axios.post("http://localhost:4000/transactions",transaction)
}

inputsNegButton=()=>{
  let tempInputs = {...this.state.inputs}
  tempInputs.amountInput="-"+tempInputs.amountInput
    let transaction=tempInputs
    axios.post("http://localhost:4000/transactions",transaction)
}

deleteTransaction=async (id)=>{
  let transaction1=await axios.delete(`http://localhost:4000/transaction/${id}`)

  this.setState({transaction:transaction1.data})
}

render() {
  
  return (
    <Router>
      <div id="main-links">
      <Link to="/Operations">Operations</Link>
      <Link to="/Transactions">Transactions</Link>
      <Route path="/Operations" exact render={() => <Operations
      key={this.state.transaction}
      handleInput={this.handleInput}
      inputsPositiveButton={this.inputsPositiveButton}
      inputsNegButton={this.inputsNegButton}
      />}
      />
      <Route path="/Transactions" exact render={() => <Transactions 
      key={this.state.transaction}
      transactions={this.state.transaction}
      deleteTransaction={this.deleteTransaction}/>}/>
      </div>
    </Router>

  );
}
}

export default App;
