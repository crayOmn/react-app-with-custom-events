import React from 'react';

import { AddToCartButton } from '../../components/AddToCartButton';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../types';

export interface AddToCartButtonContainerProps {
    product: Product;
}

export const AddToCartButtonContainer: React.FC<AddToCartButtonContainerProps> = ({ product }) => {
    const { cartItems, updateCart } = useCart();

    return (
        <AddToCartButton
            cartItem={cartItems.find(cartItem => cartItem.id === product.id) || { ...product, quantity: 0 }}
            updateCart={updateCart}
        />
    );
}