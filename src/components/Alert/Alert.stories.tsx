import React from 'react';
import { Provider } from 'react-redux';
import store from "../../state";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './';

export default {
    title: 'Alert.',
    component: Alert,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ],
} as ComponentMeta<typeof Alert>;

export const Default: ComponentStory<typeof Alert> = () => <Alert />