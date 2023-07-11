import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Compoent from '.';

export default {
    title: 'ScrollTopButton',
    component: Compoent,
} as ComponentMeta<typeof Compoent>;

export const Default: ComponentStory<typeof Compoent> = () => <Compoent />