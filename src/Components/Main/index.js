import React, {Component} from 'react';
import './styles.css';
import BookSelection from "../BookSelection";
import ContentView from "../ContentView";
import Transactions from "../Transactions";

export default class Main extends Component {
  state = {
    srcHash: '',
    clientWalletAddress: '0xc9E4C7e8E2C9055492E3971dD380a359f4Ec4111',
  };

  onSelected = (srcHash) => {
      if (srcHash !== this.state.srcHash) {
          this.setState({srcHash})
      }
  };

  render() {
    return ( 
      <div className="container">
        <BookSelection clientWalletAddress = {this.state.clientWalletAddress} onBookSelected = {this.onSelected}/>
        <div className="analyticsData">
            <Transactions clientWalletAddress = {this.state.clientWalletAddress}/>
            <ContentView srcHash = {this.state.srcHash}/>
        </div>
      </div>
    );
  }
}