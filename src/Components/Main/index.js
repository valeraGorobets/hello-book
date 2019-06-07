import React, {Component} from 'react';
import './styles.css';
import ContentView from "../ContentView";
import Transactions from "../Transactions";
import Chart from "../Chart";
import { BigchainDb } from '../../Services/BigchindbService';

export default class Main extends Component {
  state = {
    clientWalletAddress: '0xc9E4C7e8E2C9055492E3971dD380a359f4Ec4111',
    chart: {},
  };

  componentDidMount = async () => {
      const bigchainDb = new BigchainDb();
      const chart = await bigchainDb.getFromDb();
      this.setState({chart});
  };

  onSelected = (selectedBook) => {
    const chartCopy = this.state.chart;
    chartCopy[selectedBook.label]++;
    this.setState({
        chart: chartCopy,
    })
  };

    render() {
    return (
      <div className="container">
        <div className="analyticsData">
            <div className="verticalAlign">
                <Transactions clientWalletAddress = {this.state.clientWalletAddress}/>
                <Chart chart = {this.state.chart}/>
            </div>
            <ContentView clientWalletAddress = {this.state.clientWalletAddress} onBookSelected = {this.onSelected}/>
        </div>
      </div>
    );
  }
}
