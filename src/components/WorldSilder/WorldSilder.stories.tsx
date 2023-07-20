import React from 'react';
import { Provider } from 'react-redux';
import store from "../../state";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'WorldSilder',
    component: Component,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ],
} as ComponentMeta<typeof Component>;

export const Default: ComponentStory<typeof Component> = () => <Component />