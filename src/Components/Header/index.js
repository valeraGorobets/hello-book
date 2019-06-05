import React, {Component} from 'react';
import './styles.css'
import {getTransactionHistory} from "../../Services/TransactionsHistoryService";

export default class Header extends Component {
  state = {
      balance: 10,
  };
 componentDidMount = async () => {
        // this.reloadTransactions();
        // setInterval(this.reloadTransactions, 5000);
        // const balance = await web3.eth.getBalance(this.props.clientWalletAddress);
        // this.setState({
        //     balance: web3.utils.fromWei(balance, 'ether')
        // });
    };

    // reloadTransactions = async () => {
    //     const transactionHistory = await getTransactionHistory(this.props.clientWalletAddress);
    //     console.log(transactionHistory);
    //     this.setState({transactionHistory});
    // };
  render() {
    return (
      <header>
        <h1 className="text-center">Hello Book App</h1>
        <h2>Balance: {this.state.balance} HBL</h2>
      </header>
    );
  }
}
