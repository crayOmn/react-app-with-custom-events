import { Button,Stack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { products } from '../../../mocks';
import { ProductItem } from './ProductItem';

export default {
    title: 'Products/Components/ProductItem',
    component: ProductItem,
    args: {
        product: products[0]
    }
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

export const Default = Template.bind({});

export const WithAddToCartButton = Template.bind({});
WithAddToCartButton.args = {
    renderAddToCartButton: () => (
        <Stack alignItems="center">
            <Button>Add to cart</Button>
        </Stack>
    )
};