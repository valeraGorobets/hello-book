import React, {Component} from 'react';
import './styles.css'
import web3 from '../../web3';

export default class Transactions extends Component {
  state = {
    balance: 0,
  };
  componentDidMount = async () => {
    const balance = await web3.eth.getBalance(this.props.clientWalletAddress);
    this.setState({
        balance: web3.utils.fromWei(balance, 'ether')
    });
  };

  render() {
    return (
        <div className="transactions">
            <div className="balance">
                <h2>Balance: {this.state.balance} HBL</h2>
            </div>
            <div className="transactions-list">
                <h2>{this.state.balance}</h2>
            </div>
        </div>
    );
  }
}