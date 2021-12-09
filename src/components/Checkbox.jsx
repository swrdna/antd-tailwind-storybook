import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ label, labelPosition }) => {
  return (
    <div>
      {labelPosition === 'left' && <label>{label}</label>}
      <input type="checkbox" />
      {labelPosition === 'right' && <label>{label}</label>}
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['left', 'right'])
}

Checkbox.defaultProps = {
  label: 'This is checkbox',
  labelPosition: 'right'
}

export default Checkbox
