import { action } from '@storybook/addon-actions';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { QuantityInput } from '../QuantityInput';

export default {
    title: 'Design System/Components/QuantityInput',
    component: QuantityInput,
    args: {
        value: 3,
        onChange: action('onChange'),
    }
} as ComponentMeta<typeof QuantityInput>;

const Template: ComponentStory<typeof QuantityInput> = (args) => <QuantityInput {...args} />;

export const Default = Template.bind({});