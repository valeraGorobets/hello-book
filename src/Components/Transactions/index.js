import React, {Component} from 'react';
import './styles.css'
// import web3 from '../../web3';
import { getTransactionHistory } from '../../Services/TransactionsHistoryService';

export default class Transactions extends Component {
  state = {
    balance: 10,
    transactionHistory: [],
  };
  componentDidMount = async () => {
    this.reloadTransactions();
    // setInterval(this.reloadTransactions, 5000);
    // const balance = await web3.eth.getBalance(this.props.clientWalletAddress);
    // this.setState({
    //     balance: web3.utils.fromWei(balance, 'ether')
    // });
  };

  reloadTransactions = async () => {
      const transactionHistory = await getTransactionHistory(this.props.clientWalletAddress);
      console.log(transactionHistory);
      this.setState({transactionHistory});
  };

  render() {
    return (
        <div className="transactions">

            <div className="transactions-list">
                <div className="card">
                    <p>Time</p>
                    <p>Transaction info</p>
                    <p>Value</p>
                </div>
                {this.state.transactionHistory.map(transaction => (
                    <div className="card" key={transaction.hash}>
                        <p>{transaction.timeStamp}</p>
                        <div>
                            <p>From : {transaction.from || "No address found"}</p>
                            <p>To : {transaction.to || "No address found"}</p>
                        </div>
                        <p>{transaction.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
  }
}
