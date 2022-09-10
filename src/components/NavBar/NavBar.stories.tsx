import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { NavBar } from './NavBar';

export default {
    title: 'Design System/Components/NavBar',
    component: NavBar,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        logo: 'Shop',
        rightContent: 'Right content'
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});