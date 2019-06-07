import React, {Component} from 'react';
import './styles.css';
import ContentView from "../ContentView";
import Transactions from "../Transactions";
import Chart from "../Chart";
import { BigchainDb } from '../../Services/BigchindbService';

export default class Main extends Component {
  state = {
    chart: {},
  };

  componentDidMount = async () => {
      this.bigchainDb = new BigchainDb();
      const chart = await this.bigchainDb.getFromDb();
      this.setState({chart});
  };

  onSelected = async (selectedBook) => {
    const chartCopy = this.state.chart;
    chartCopy[selectedBook.label]++;
    const chart = await this.bigchainDb.sendToDb(chartCopy);
    this.setState({
        chart,
    })
  };

    render() {
    return (
      <div className="container">
        <div className="analyticsData">
            <div className="verticalAlign">
                <Transactions clientWalletAddress = {this.props.clientWalletAddress}/>
                <Chart chart = {this.state.chart}/>
            </div>
            <ContentView clientWalletAddress = {this.props.clientWalletAddress} onBookSelected = {this.onSelected}/>
        </div>
      </div>
    );
  }
}
