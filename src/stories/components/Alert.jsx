import React from 'react'
import PropTypes from 'prop-types'

const Alert = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo. Veniam tenetur impedit ullam vel exercitationem cumque esse ut commodi, officiis, at distinctio quam dignissimos dolore error dolorum consequuntur optio.</p>
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string
}

Alert.defaultProps = {
  type: 'primary',
  content: 'This is alert'
}

export default Alert
