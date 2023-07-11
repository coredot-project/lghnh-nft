import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from './';

export default {
    title: 'NftItem',
    component: Component,
} as ComponentMeta<typeof Component>;

export const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />

export const Default = Template.bind({});
Template.args = {
    id: 1,
};