import React from 'react';

import { ViewCartButton } from '../../components/ViewCartButton';
import { useCart } from '../../hooks/useCart';

export const ViewCartButtonContainer: React.FC = () => {
    const { cartItems, totalPrice, currency, openCart } = useCart();

    return (
        <ViewCartButton
            totalPrice={totalPrice}
            currency={currency}
            numberOfProducts={cartItems.length}
            openCart={openCart}
        />
    );
}