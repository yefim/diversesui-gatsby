import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      size: 78,
      sex: 'neutral',
      images: null,
      page: 0,
    }
  }

  render() {
    return (
      <div>
        <select
          value={this.state.sex}
          onChange={e => {
            this.setState({ sex: e.target.value })
          }}
        >
          <option value="neutral">Neutral</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
    )
  }
}

export default IndexPage
