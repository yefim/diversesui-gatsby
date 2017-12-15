import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Diverse UI"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <header>
      <div>
        <Link to="/">
          <img src="img/logo.png" />
        </Link>
        <div>
          <Link to="/about">About</Link>
          <a href="https://github.com/reneepadgham/diverseui-sketch-plugin#readme">
            Sketch Plugin
          </a>
          <Link to="/submit">Submit</Link>
        </div>
      </div>
    </header>
    {children()}
    <footer>
      <p>
        &copy; Diverse UI 2017 | <Link to="/terms">Terms of Service</Link>
      </p>
      <p>
        Made with 💖 and ☕ in San Francisco by{' '}
        <a href="https://renee.im" target="_blank">
          Renee
        </a>{' '}
        and{' '}
        <a href="https://www.yef.im" target="_blank">
          Yefim
        </a>.
      </p>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
