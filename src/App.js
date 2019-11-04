import React from 'react';

import CellRow from './components/cell-row/cell-row.component';
import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentMonth: 0,
      currentYear: 0,
      monthStartDayIdx: 0,
      monthEndDate: 0,
      rows: [],
    }
    this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.setMonth = this.setMonth.bind(this);
    this.setYear = this.setYear.bind(this);
  }

  setMonth(event) {
    console.log('selected month', event.target.value);
    const year = this.state.currentYear;
    const month = parseInt(event.target.value, 10);
    console.log(month)
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    console.log('day index of first of month', firstDay)
    this.setState({
      currentMonth: month,
      monthStartDayIdx: firstDay.getDay(),
      monthEndDate: lastDay.getDate()
    }, () => {this.createRows()});

  }

  setYear(event) {
    console.log(event.target.value);
    const year = event.target.value;
    const month = this.state.currentMonth;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    this.setState({
      currentYear: event.target.value,
      monthStartDayIdx: firstDay.getDay() + 1, //Thursday
      monthEndDate: lastDay.getDate()
    }, () => { this.createRows() });
  }

  createRows() {
    const arrayOfRows = [];
    let date = 1;
    for (let i = 0; i <= 5; i++) {   //rows
      const rowValues = [];
      for (let j = 0; j <= 6; j++) {    //columns
        if (i === 0 && j < this.state.monthStartDayIdx) {
          rowValues.push(null);
        } else if (date > this.state.monthEndDate) {
          rowValues.push(null);
        } else {
          rowValues.push(date);
          date++;
        }
      }
      arrayOfRows.push(rowValues);
    }
    this.setState({ rows: arrayOfRows })
  }

  componentDidMount() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    this.setState({
      monthStartDayIdx: firstDay.getDay(),
      monthEndDate: lastDay.getDate(),
      currentMonth: month,
      currentYear: year
    }, () => { this.createRows(); console.log('on mount', this.state) })

  }

  render() {

    return (

        <div className='calendar'>
          <Header setDate={this.setMonth} setYear={this.setYear} currentMonth={this.state.currentMonth} currentYear={this.state.currentYear} />
          <div className='day-row'>
            <CellRow range={this.daysOfWeek} />
          </div>
          <div className='cell-rows'>
            {this.state.rows.map((row, idx) => <CellRow range={row} key={idx} />)}
          </div>
        </div>

    )
  }
}

export default App;
