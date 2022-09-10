import { action } from '@storybook/addon-actions';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { ViewCartButton } from './ViewCartButton';

export default {
    title: 'Checkout/Components/ViewCartButton',
    component: ViewCartButton,
    args: {
        currency: 'USD',
        totalPrice: 0,
        numberOfProducts: 0,
        openCart: action('openCart'),
    },
} as ComponentMeta<typeof ViewCartButton>;

const Template: ComponentStory<typeof ViewCartButton> = (args) => <ViewCartButton {...args} />;

export const Default = Template.bind({});

export const WithProductsInCart = Template.bind({});
WithProductsInCart.args = {
    totalPrice: 38.82,
    numberOfProducts: 4,
};