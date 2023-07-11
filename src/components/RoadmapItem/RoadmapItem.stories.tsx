import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';
import roadmap1 from "../../assets/images/roadmap1.png";

export default {
    title: 'RoadmapItem',
    component: Component,
} as ComponentMeta<typeof Component>;

export const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />

export const Default = Template.bind({});
Template.args = {
    image: roadmap1,
    percent: 100,
    description: "닥터그루트의 모험을 완주하셨군요! DSC 메타버스 내에서 활용 가능한 아이템을 받아가세요:D",
};