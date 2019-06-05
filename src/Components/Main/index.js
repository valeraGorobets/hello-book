import React, {Component} from 'react';
import './styles.css';
import ContentView from "../ContentView";
import Transactions from "../Transactions";

export default class Main extends Component {
  state = {
    clientWalletAddress: '0xc9E4C7e8E2C9055492E3971dD380a359f4Ec4111',
  };

  render() {
    return (
      <div className="container">
        <div className="analyticsData">
            <Transactions clientWalletAddress = {this.state.clientWalletAddress}/>
            <ContentView clientWalletAddress = {this.state.clientWalletAddress}/>
        </div>
      </div>
    );
  }
}
