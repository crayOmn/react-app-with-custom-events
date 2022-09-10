import { action } from '@storybook/addon-actions';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { products } from '../../mocks';
import { Cart } from './Cart';

export default {
    title: 'Checkout/Components/Cart',
    component: Cart,
    args: {
        cartItems: products.map(product => ({
            ...product,
            quantity: 1,
        })),
        currency: 'USD',
        totalPrice: products.reduce((total, product) => {
            total += product.price;
            return total;
        }, 0),
        updateCart: action('updateCart'),
        clearCart: action('clearCart'),
        goToCheckout: action('goToCheckout'),
        continueShopping: action('continueShopping'),
    }
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Default = Template.bind({});