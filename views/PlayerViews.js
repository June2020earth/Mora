import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    const finger = (this.state || {}).finger
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <input
          type='number'
          placeholder="Finger play"
          onChange={(e) => this.setState({finger: e.currentTarget.value})}
        />
        <button
          onClick={() => parent.playFinger(finger)}
        >Play Finger</button>
      </div>
    );
  }
}
exports.GetGuess = class extends React.Component {
    render() {
      const {parent, playable, hand} = this.props;
      const guess = (this.state || {}).guess
      return (
        <div>
          {hand ? 'It was a draw! Pick again.' : ''}
          <br />
          {!playable ? 'Please wait...' : ''}
          <br/>
          <input
            type='number'
            placeholder="Guess finger"
            onChange={(e) => this.setState({guess: e.currentTarget.value})}
          />
        <button
          onClick={() => parent.playGuess(guess)}
        >Play Finger</button>
        </div>
      );
    }
  }
exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {result} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{result || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;