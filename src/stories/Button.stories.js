import { fn } from 'storybook/test';
import { Button } from '../components/button'

const meta = {
  component: 'c-button',
  title: 'Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export default meta;

export const Default = {
  args: {
    label: 'My first button',
    variant: 'primary'
  },
};