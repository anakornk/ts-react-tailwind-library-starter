import { Meta, Story } from '@storybook/react';
import { Example, ExampleProps } from './Example';

const meta: Meta = {
  title: 'Example/Test',
  component: Example,
};

export default meta;

const Template: Story<ExampleProps> = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Hello World',
};
