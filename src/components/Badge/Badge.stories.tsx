import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import { Badge } from './Badge';

export default {
    title: 'Design System/Components/Badge',
    component: Badge,
    args: {
        count: 1,
        children: <FiShoppingBag size="24px" />
    }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});