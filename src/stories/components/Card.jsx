import React from 'react'
import PropTypes from 'prop-types'
import { Card as AntCard } from 'antd'

const Card = (props) => {
  return (
    <AntCard {...props}>
      <div>{props.content}</div>
    </AntCard>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default']),
  content: PropTypes.string,
}

Card.defaultProps = {
  title: 'This is card',
  size: 'default',
  content: 'This is card content',
}

export default Card
