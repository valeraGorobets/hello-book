import React, {Component} from 'react';
import './styles.css';
import ContentView from "../ContentView";
import Transactions from "../Transactions";
import Chart from "../Chart";

export default class Main extends Component {
  state = {
    clientWalletAddress: '0xc9E4C7e8E2C9055492E3971dD380a359f4Ec4111',
    chart: {
        'Math': 1,
        'Chemistry': 1,
        'Hello Book': 3,
    },
  };

  render() {
    return (
      <div className="container">
        <div className="analyticsData">
            <div className="verticalAlign">
                <Transactions clientWalletAddress = {this.state.clientWalletAddress}/>
                <Chart chart = {this.state.chart}/>
            </div>
            <ContentView clientWalletAddress = {this.state.clientWalletAddress}/>
        </div>
      </div>
    );
  }
}
