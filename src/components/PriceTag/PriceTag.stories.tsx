import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { PriceTag } from './PriceTag';

export default {
    title: 'Design System/Components/PriceTag',
    component: PriceTag,
    args: {
        price: 199,
        currency: 'USD',
    }
} as ComponentMeta<typeof PriceTag>;

const Template: ComponentStory<typeof PriceTag> = (args) => <PriceTag {...args} />;

export const Default = Template.bind({});

export const WithSalePrice = Template.bind({});
WithSalePrice.args = {
    price: 199,
    salePrice: 179.99,
    currency: 'USD',
};