import React, {Component} from 'react';
import './styles.css'

const IPFS_URL = 'https://gateway.ipfs.io/ipfs/';

export default class ContentView extends Component {
  render() {
    return (
        <div className="contentView">
            {this.props.srcHash ?
                <img src = {IPFS_URL + this.props.srcHash} alt=""/>
                : <h2>Not selected</h2>
            }
        </div>
    );
  }
}