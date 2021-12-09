import React from 'react'
import Card from '../components/Card'

export default {
  title: 'Component/Card',
  component: Card
}

const Template = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = {
  border: true,
  shadow: false,
  background: 'red',
  color: 'white'
}
