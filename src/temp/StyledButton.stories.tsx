import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StyledButton } from './StyledButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/StyledButton',     
  component: StyledButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    padding: { control: 'text' },
    width: { control: 'text' },
    size:{
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      }
    }
  },
} as ComponentMeta<typeof StyledButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  width: '200px',
  height: '100px',
  borderColor: 'red',
  backgroundColor: 'yellow',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  width: '200px',
  height: '100px',

};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'small',
};
