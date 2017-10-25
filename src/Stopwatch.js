import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this._onReset = this._onReset.bind(this);
    this._onStartStop = this._onStartStop.bind(this);

    this.state = {
      timer: 0,
      interval: null
    }
  }

  _onReset(e) {
    this._clearInterval();
    this.setState({
      timer: 0
    })
  }

  _onStartStop(e) {
    if(this.state.interval) {
      this._clearInterval();
    } else {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            timer: this.state.timer + 1
          });
        }, 1000)
      });
    }
  }

  _clearInterval() {
    clearInterval(this.state.interval);
    this.setState({
      interval: null
    });
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timer}</h1>
        <div className="controls">
          <button onClick={this._onReset}>Reset</button>
          <button onClick={this._onStartStop}>{this.state.interval ? 'Stop' : 'Start'}</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
