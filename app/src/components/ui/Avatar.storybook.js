import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Avatar from './Avatar'

storiesOf('Avatar', module)
  .add('simple', () => (
    <Avatar url={"https://avatars0.githubusercontent.com/u/21034087?s=400&u=aee19ffde16cb468ad17563cf054df1560055fd5&v=4"} />
  ))