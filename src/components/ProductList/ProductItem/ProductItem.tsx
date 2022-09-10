import {
    Box,
    Image,
    Skeleton,
    Stack,
    StackProps,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

import { Product } from '../../../types';
import { PriceTag } from '../../PriceTag';

export interface ProductItemProps extends StackProps {
    product: Product;
    renderAddToCartButton?: (product: Product) => React.ReactNode;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product, renderAddToCartButton, ...rootProps }) => (
    <Stack spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
        <Box position="relative">
            <Image
                mx="auto"
                height="150px"
                fit="contain"
                src={product.imageUrl}
                alt={product.name}
                draggable="false"
                fallback={<Skeleton />}
                objectPosition="center bottom"
            />
        </Box>
        <Stack alignItems="center">
            <Text
                fontWeight="medium"
                color="gray.700"
            >
                {product.name}
            </Text>
            <PriceTag
                price={product.price}
                salePrice={product.salePrice}
                currency={product.currency}
            />
        </Stack>
        {renderAddToCartButton && renderAddToCartButton(product)}
    </Stack>
);