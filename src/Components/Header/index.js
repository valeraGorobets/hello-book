import React, {Component} from 'react';
import './styles.css';
import web3 from '../../Utils/web3';

export default class Header extends Component {
  state = {
      balance: 0,
  };

  componentDidMount = async () => {
     this.reloadBalance();
     setInterval(this.reloadBalance, 5000);
  };

  reloadBalance = async () => {
      const balance = await web3.eth.getBalance(this.props.clientWalletAddress);
      this.setState({
          balance: web3.utils.fromWei(balance, 'ether')
      });
  };

  render() {
    return (
      <header>
        <h1 className="text-center">Hello Book App</h1>
        <h2>Balance: {this.state.balance} HBL</h2>
      </header>
    );
  }
}
