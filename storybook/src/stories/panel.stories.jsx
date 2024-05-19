import Panel from '../../../src/panel';
import '@nenkan/css/panel.scss';

export default {
  title: 'Panel',
  component: Panel,
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    modifier: {
      control: {
        type: 'select',
      },
      options: ['danger', 'warning'],
    },
  },
};

export const PanelExample = {};

export const PanelExampleDanger = {
  args: {
    modifier: 'danger',
    children: 'Lorem ipsum danger',
  },
};

export const PanelExampleWarning = {
  args: {
    modifier: 'warning',
    children: 'Lorem ipsum warning',
  },
};
