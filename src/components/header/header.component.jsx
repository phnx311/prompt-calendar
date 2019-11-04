import React from 'react';
import './header.styles.scss';

const Header = ({ setDate, setYear, currentMonth, currentYear }) =>
(
  <div className='header'>
    <div className='header-month'>
      <select name="month-selector" id="month" value={currentMonth} onChange={setDate}>
        <option value={0}>January</option>
        <option value={1}>February</option>
        <option value={2}>March</option>
        <option value={3}>April</option>
        <option value={4}>May</option>
        <option value={5}>June</option>
        <option value={6}>July</option>
        <option value={7}>August</option>
        <option value={8}>September</option>
        <option value={9}>October</option>
        <option value={10}>November</option>
        <option value={11}>December</option>
      </select>
    </div>
    <div className='header-year'>
      <select name="year-selector" id="year" value={currentYear} onChange={setYear}>
        <option value={2017}>2017</option>
        <option value={2018}>2018</option>
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
      </select>
    </div>

  </div>
)

export default Header;
