import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const MyButton = (props) => {
  return (
    <Button {...props} className={`tw-ab-btn-${props.type}`}>{props.label}</Button>
  )
}

MyButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'danger', 'dashed']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool
}

MyButton.defaultProps = {
  type: 'primary',
  size: 'medium',
  label: 'Primary Button',
  loading: false,
  disabled: false,
  block: false
}

export default MyButton
