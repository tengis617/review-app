import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import UserProfilePage from './UserProfilePage'

const user = {
  email: 'tengis@gmail.com',
  name: 'Tengis',
  image: 'https://avatars0.githubusercontent.com/u/21034087?s=400&u=aee19ffde16cb468ad17563cf054df1560055fd5&v=4'
}
storiesOf('User Profile Page', module)
  .add('with data', () => (
    <UserProfilePage user={user} />
  ))