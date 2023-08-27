import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: 'Primary'
  }
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: 'Secondary'
  }
};
