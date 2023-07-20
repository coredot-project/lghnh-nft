import React from 'react';
import { Provider } from 'react-redux';
import store from "../../state";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'WorldModal',
    component: Component,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ],
} as ComponentMeta<typeof Component>;

export const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />

export const Default = Template.bind({});
Template.args = {
    index: 0
};