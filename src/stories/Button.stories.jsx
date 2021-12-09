import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Form/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  type: 'primary',
  size: 'medium',
  label: 'Button Primary',
  loading: false,
  disabled: false,
  block: false
}