import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import * as React from 'react';

import { ProductItem, ProductItemProps } from './ProductItem';

export interface ProductListProps extends SimpleGridProps {
    products: ProductItemProps['product'][];
    renderAddToCartButton?: ProductItemProps['renderAddToCartButton'];
}

export const ProductList: React.FC<ProductListProps> = ({ products, renderAddToCartButton, ...rootProps }) => {
    const columns = React.useMemo(() => {
        const count = products.length;
        return {
            base: Math.min(2, count),
            md: Math.min(3, count),
            lg: Math.min(4, count),
        }
    }, [products]);

    return (
        <SimpleGrid
            columns={columns}
            columnGap={{ base: '4', md: '6' }}
            rowGap={{ base: '8', md: '10' }}
            {...rootProps}
        >
            {products.map((product, key) => (
                <ProductItem
                    key={key}
                    product={product}
                    renderAddToCartButton={renderAddToCartButton}
                />
            ))}
        </SimpleGrid>
    );
}