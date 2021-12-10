import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ type, content }) => {
  return (
    <div type={props.type}>
      <p>{props.content}</p>
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
}

Alert.defaultProps = {
  type: 'primary',
  content: 'This is alert',
}

export default Alert
