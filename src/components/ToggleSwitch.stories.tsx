import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';

const meta: Meta = {
  title: 'Tailwind/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};
