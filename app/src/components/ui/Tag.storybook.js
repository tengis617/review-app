import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tag from './Tag';

storiesOf('Tag', module)
  .add('hashtag', () => (
    <Tag>#coffee</Tag>
  ))