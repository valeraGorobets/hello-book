import React, {Component} from 'react';
import './styles.css'
import Select from 'react-select';
import {getAvailableBooks, getAvailablePages} from "../../Services/BooksInfoService";

export default class BookSelection extends Component {
  state = {
    selectedBookOption: null,
    selectedPageOption: null,
    bookOptions: [],
    pageOptions: [],
  };

  componentDidMount() {
    this.setState({
      bookOptions: getAvailableBooks(),
      pageOptions: getAvailablePages(),
    })
  }

  handleBookChange = (selectedBookOption) => {
    this.setState({ selectedBookOption });
  };
  handlePageChange = (selectedPageOption) => {
    this.setState({ selectedPageOption });
  };
  onSubmitClick = () => {
    console.log(this.state);
  };

  getBookOptions = () => this.state.bookOptions;
  getPageOptions = () => this.state.pageOptions;


  render() {
    const { selectedBookOption,  selectedPageOption} = this.state;
    return (
        <div className="wrapper">
          <Select
              value={selectedBookOption}
              onChange={this.handleBookChange}
              options={this.getBookOptions()}
          />
          <Select
              value={selectedPageOption}
              onChange={this.handlePageChange}
              options={this.getPageOptions()}
          />
          <button onClick={this.onSubmitClick}>Go</button>
        </div>
    );
  }
}