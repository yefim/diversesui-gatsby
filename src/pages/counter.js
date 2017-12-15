import React from 'react'
import Link from 'gatsby-link'

class Counter extends React.Component {
  constructor() {
    super()

    this.state = { counter: 0 }
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 })
          }}
        >
          Click
        </button>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}

export default Counter
