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
        currencyInput:"",
        categoryInput:"",
        vendorInput:""
        }
      }
}
async getTransaction() {
  return axios.get("http://localhost:8080/transactions")
}
async componentDidMount() {
  const transaction = await this.getTransaction()
  this.setState({ transaction:transaction.data })
}
async componentDidUpdate(){
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
  axios.post("http://localhost:8080/transactions",transaction)
}

inputsNegButton=()=>{
  let tempInputs = {...this.state.inputs}
  tempInputs.amountInput="-"+tempInputs.amountInput
    let transaction=tempInputs
    axios.post("http://localhost:8080/transactions",transaction)
}

deleteTransaction=async (id)=>{
  let transaction1=await axios.delete(`http://localhost:8080/transaction/${id}`)

  this.setState({transaction:transaction1.data})
}

render() {
  
  return (
    <div>
    <Router>
      <div>
      <div id="main-links">
      <img id="img" src='https://cdn-icons-png.flaticon.com/512/2830/2830284.png'></img>
      <Link id="operationsLink" to="/">Operations</Link>
      <Link id="TransactionsLink" to="/Transactions">Transactions</Link>
      </div>
      <Route path="/" exact render={() => <Operations
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
    </div>

  );
}
}

export default App;
