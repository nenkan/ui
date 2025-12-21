import Button from '../../../src/button';
import '@nenkan/css/button.scss';
import { expect, userEvent, within } from 'storybook/test';

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

export const Interactive = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    // Test that the button exists and has correct text
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent('Button');
    
    // Test clicking the button
    await userEvent.click(button);
  }
};

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
