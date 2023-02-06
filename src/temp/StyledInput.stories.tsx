import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyledInput from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/StyledInput',
  component: StyledInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    padding: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    fontWeights: { control: 'text' },
    margin: { control: 'text' },
    type: {
        control: {
            type: 'select',
            options: ['text', 'password', 'email', 'number'],
        }
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    placeholderColor: { control: 'color' },
    fontSizes: { control: 'text' },

  },
} as ComponentMeta<typeof StyledInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StyledInput> = (args) => <StyledInput {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    fontSizes:"16px",
    background: 'yellow',
    placeholder: 'placeholder',
    type: 'text',
    placeholderColor: 'red',
    className: 'input',
    margin: '10px',
    padding: '10px',
};


