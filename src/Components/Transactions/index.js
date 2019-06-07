import React, {Component} from 'react';
import './styles.css';
import { getTransactionHistory } from '../../Services/TransactionsHistoryService';

export default class Transactions extends Component {
  state = {
    transactionHistory: [],
  };

  componentDidMount = async () => {
    this.reloadAccountInfo();
    setInterval(this.reloadAccountInfo, 5000);
  };

  reloadAccountInfo = async () => {
      const transactionHistory = await getTransactionHistory(this.props.clientWalletAddress);
      this.setState({
          transactionHistory,
      });
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
                        <p>{transaction.value} ETH</p>
                    </div>
                ))}
            </div>
        </div>
    );
  }
}
