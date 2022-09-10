import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import { Badge } from '../Badge/Badge';
import { PriceTag } from '../PriceTag';

export interface ViewCartButtonProps {
    totalPrice: number;
    currency: string;
    numberOfProducts: number;
    openCart: () => void;
}

export const ViewCartButton: React.FC<ViewCartButtonProps> = ({ totalPrice, currency, numberOfProducts, openCart }) => {
    const iconCart = numberOfProducts ? (
        <Badge count={numberOfProducts} marginRight="5px">
            <FiShoppingBag size="24px" />
        </Badge>
    ) : <FiShoppingBag size="24px" />;

    return (
        <Button
            leftIcon={iconCart}
            onClick={openCart}
            aria-label="View Cart"
        >
            <PriceTag
                currency={currency}
                price={totalPrice}
            />
        </Button>
    )
}