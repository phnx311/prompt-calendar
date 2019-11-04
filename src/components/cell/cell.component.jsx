import React from 'react';
import './cell.styles.scss';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {},
      showEvent: false
    }
  }

  render() {
    const {last, date} = this.props;
    return (
        <div className={`cell ${last ? "last" : ""}`} onClick={this.showEvent}>
          {date}
        </div>
    )
  }
}

export default Cell;