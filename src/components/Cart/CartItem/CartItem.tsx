import { CloseButton, Flex } from '@chakra-ui/react'
import * as React from 'react';

import { CartProduct } from '../../../types';
import { PriceTag } from '../../PriceTag';
import { QuantityInput } from '../../QuantityInput';
import { CartProductMeta } from './CartProductMeta';

export interface CartItemProps {
    cartItem: CartProduct;
    updateCart: (options: CartProduct) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ cartItem, updateCart }) => (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
        <CartProductMeta
            name={cartItem.name}
            imageUrl={cartItem.imageUrl}
        />
        <Flex
            width="full"
            justify="space-between"
            align="center"
            mt={{ base: 4, md: 0 }}
            ml={{ md: 4 }}
        >
            <QuantityInput
                value={cartItem.quantity}
                onChange={(_, valueAsNumber: number) => updateCart({ ...cartItem, quantity: valueAsNumber })}
            />
            <PriceTag
                price={cartItem.price}
                salePrice={cartItem.salePrice}
                currency={cartItem.currency}
            />
            <CloseButton
                aria-label={`Delete ${cartItem.name} from cart`}
                onClick={() => updateCart({ ...cartItem, quantity: 0 })}
            />
        </Flex>
    </Flex>
)