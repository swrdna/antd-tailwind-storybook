import React from 'react'
import PropTypes from 'prop-types'

const Card = () => {
  return (
    <div className="bg-red-600">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo. Veniam tenetur impedit ullam vel exercitationem cumque esse ut commodi, officiis, at distinctio quam dignissimos dolore error dolorum consequuntur optio.</p>
    </div>
  )
}

Card.propTypes = {
  border: PropTypes.bool,
  shadow: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string
}

Card.defaultProps = {
  border: true,
  shadow: false,
  background: 'red',
  color: 'white'
}

export default Card
