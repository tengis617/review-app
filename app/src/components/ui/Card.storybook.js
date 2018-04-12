import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from './Card';

storiesOf('Card', module)
  .add('with text', () => (
    <Card>Hello This is a card</Card>
  ))
  .add('with image', () => (
    <Card image={'https://tailwindcss.com/img/card-left.jpg'}>Card with image!</Card>
  ));