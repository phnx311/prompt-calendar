import React from 'react';
import './cell.styles.scss';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasEvent: false,
    }
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent() {
        if (this.props.date) {
          this.setState({ hasEvent: !this.state.hasEvent })
        }
  }


  render() {
    const {last, date} = this.props;
    return (
        <div className={`cell ${last ? "last" : ""} ${this.state.hasEvent ? "event" : ""}`} onClick={this.addEvent}>
          {date} {this.state.hasEvent ? " - Event" : ""}
        </div>
    )
  }
}

export default Cell;