import React from 'react'
import Alert from '../components/Alert'

export default {
  title: 'Component/Alert',
  component: Alert
}

const Template = (args) => <Alert {...args} />

export const Basic = Template.bind({})
Basic.args = {
  type: 'primary',
  content: 'This is alert'
}
