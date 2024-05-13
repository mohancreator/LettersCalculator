import React, {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeFun = event => {
    const word = event.target.value
    const length = word.length
    this.setState({count: length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="calculator-container">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="phrase">Enter the phrase</label>{' '}
          <input type="text" id="phrase" onChange={this.onChangeFun} />
          <p>No.of letters: {count}</p>
        </div>
        <div>
          <img
            className="img-1"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
