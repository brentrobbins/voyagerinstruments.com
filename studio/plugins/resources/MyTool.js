import React from 'react'

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from './MyTool.css'

const IframeComponent = () => ({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function () {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.iframe()} />
      </div>
    )
  }
})

const iframe = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTCzRvADhL3nAYZN-Wx8QJc_fB8xx3vQEow12fj9c_yEosUQJkapjuZst-a-bA9GyV7qPJfQkHZGikN/pub?embedded=true" width="100%" height="1200px"></iframe>'

class MyTool extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <IframeComponent iframe={iframe} />
      </div>
    )
  }
}

export default MyTool
