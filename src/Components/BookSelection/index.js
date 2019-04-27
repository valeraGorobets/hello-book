import React, {Component} from 'react';
import './styles.css'
import Select from 'react-select';

const bookOptions = [
  { value: 'math', label: 'Math' },
  { value: 'literature', label: 'Literature' },
  { value: 'chemistry', label: 'Chemistry' }
];

const pageOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

export default class BookSelection extends Component {
  state = {
    selectedBookOption: null,
    selectedPageOption: null,
  };
  handleBookChange = (selectedBookOption) => {
    this.setState({ selectedBookOption });
  };
  handlePageChange = (selectedPageOption) => {
    this.setState({ selectedPageOption });
  };
  onSubmitClick = () => {
    console.log(this.state);
  };

  render() {
    const { selectedBookOption,  selectedPageOption} = this.state;
    return (
        <div className="wrapper">
          <Select
              value={selectedBookOption}
              onChange={this.handleBookChange}
              options={bookOptions}
          />
          <Select
              value={selectedPageOption}
              onChange={this.handlePageChange}
              options={pageOptions}
          />
          <button onClick={this.onSubmitClick}>Go</button>
        </div>
    );
  }
}