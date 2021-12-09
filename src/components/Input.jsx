import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

const MyInput = (props) => {
  return (
    <Input {...props} />
  )
}

MyInput.propTypes = {
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  placeholder: PropTypes.string
}

MyInput.defaultProps = {
  size: 'middle',
  placeholder: 'This is Input'
}

export default MyInput
