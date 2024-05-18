import Button from '../../../src/button';
import '@nenkan/css/button.scss';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    modifier: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'danger'],
    }
  }
};

export const Plain = {};

export const Primary = {
  args: {
    modifier: 'primary',
  },
};

export const Secondary = {
  args: {
    modifier: 'secondary',
  },
};

export const Danger =  {
  args: {
    modifier: 'danger',
  },
};
