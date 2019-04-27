import React, {Component} from 'react';
import './styles.css';
import BookSelection from "../BookSelection";
import Spark from "../Spark";
import Storm from "../Storm";

export default class Main extends Component {
  render() {
    return ( 
      <div className="container">
        <BookSelection/>
        <div className="analyticsData">
            <Storm/>
            <Spark/>
        </div>
      </div>
    );
  }
}