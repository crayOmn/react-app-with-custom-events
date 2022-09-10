import { HStack, StackProps, TextProps } from '@chakra-ui/react';
import * as React from 'react';

import { formatPrice } from './formatPrice';
import { Price } from './Price';
import { SalePrice } from './SalePrice';

export interface PriceTagProps extends StackProps {
    currency: string;
    price: number;
    salePrice?: number;
    priceProps?: TextProps;
    salePriceProps?: TextProps;
}

export const PriceTag: React.FC<PriceTagProps> = ({ price, currency, salePrice, priceProps, salePriceProps, ...rootProps }) => {
    return (
        <HStack spacing="1" {...rootProps}>
            <Price isOnSale={!!salePrice} {...priceProps}>
                {formatPrice(price, { currency })}
            </Price>
            {salePrice && (
                <SalePrice {...salePriceProps}>{formatPrice(salePrice, { currency })}</SalePrice>
            )}
        </HStack>
    )
}