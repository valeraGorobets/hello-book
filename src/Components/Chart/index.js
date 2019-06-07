import React, { Component } from 'react';
import './styles.css'
import Plot from 'react-plotly.js';

export default  class Chart extends Component {
  render() {
    const x = Object.keys(this.props.chart);
    const y = Object.values(this.props.chart);
    return (
        <Plot
            data={[
              {type: 'bar', x, y, marker: {color: '#6200ee'}},
            ]}
            layout={{width: 900, height: 270, title: 'Usage history'}}
        />
    );
  }
}