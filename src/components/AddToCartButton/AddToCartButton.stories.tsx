import { action } from '@storybook/addon-actions';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { products } from '../../mocks';
import { AddToCartButton } from './AddToCartButton';

export default {
    title: 'Checkout/Components/AddToCartButton',
    component: AddToCartButton,
    args: {
        cartItem: {
            ...products[0],
            quantity: 0,
        },
        updateCart: action('updateCart')
    }
} as ComponentMeta<typeof AddToCartButton>;

const Template: ComponentStory<typeof AddToCartButton> = (args) => <AddToCartButton {...args} />;

export const Default = Template.bind({});

export const WithQuantity = Template.bind({});
WithQuantity.args = {
    cartItem: {
        ...products[0],
        quantity: 1,
    },
};