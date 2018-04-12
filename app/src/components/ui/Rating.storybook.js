import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Rating from './Rating'

storiesOf('Rating', module)
  .add('full', () => (
    <Rating rating={5} />
  ))
  .add('half', () => (
    <Rating rating={2.5} />
  ))