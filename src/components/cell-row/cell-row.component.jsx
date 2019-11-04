import React from 'react';
import Cell from '../cell/cell.component';
import './cell-row.styles.scss'

const CellRow = ({ range }) => (
  <div className='cell-row'>
    {range.map((date, idx) => {
      return (
        idx === 6 ? <Cell date={date} key={idx} last /> : <Cell date={date} key={idx} />)
    })
    }
  </div>
)

export default CellRow;
