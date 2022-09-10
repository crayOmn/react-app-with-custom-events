import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import { products } from '../../mocks';
import { ProductList } from './ProductList';

export default {
    title: 'Products/Components/ProductList',
    component: ProductList,
    args: { products }
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => <ProductList {...args} />;

export const Default = Template.bind({});