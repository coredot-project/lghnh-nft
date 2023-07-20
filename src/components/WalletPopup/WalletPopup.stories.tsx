import React from 'react';
import { Provider } from 'react-redux';
import store from "../../state";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import WalletPopup from './';

export default {
    title: 'WalletPopup',
    component: WalletPopup,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ],
} as ComponentMeta<typeof WalletPopup>;

export const Default: ComponentStory<typeof WalletPopup> = () => <WalletPopup />