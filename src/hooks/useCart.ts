import { useCallback, useEffect, useMemo, useState } from 'react';

import { CartProduct, EventType } from '../types';

type UseCart = {
    totalPrice: number;
    currency: string;
    cartItems: CartProduct[];
    openCart: () => void;
    updateCart: (cartItem: CartProduct) => void;
    clearCart: () => void;
};

export const useCart = (): UseCart => {
    const [cartItems, setCartItems] = useState<CartProduct[]>([]);

    const onUpdateCart = useCallback((event: CustomEvent<CartProduct>): void => {
        const cartItem = event.detail;
        const cartItemsDraft = [...cartItems];
        const cartItemIndex = cartItemsDraft.findIndex(({ id }) => id === cartItem.id);
        if (cartItemIndex !== -1) {
            if (cartItem?.quantity !== undefined) {
                if (cartItem.quantity === 0) {
                    cartItemsDraft.splice(cartItemIndex, 1);
                } else {
                    cartItemsDraft[cartItemIndex].quantity = cartItem.quantity;
                }
            } else {
                cartItemsDraft[cartItemIndex].quantity++;
            }
        } else {
            cartItemsDraft.push({ ...cartItem, quantity: 1 });
        }
        setCartItems(cartItemsDraft);
    }, [cartItems]) as EventListenerOrEventListenerObject;

    const onClearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    useEffect(() => {
        document.addEventListener(EventType.UPDATE_CART, onUpdateCart);
        return () => {
            document.removeEventListener(EventType.UPDATE_CART, onUpdateCart, false);
        }
    }, [onUpdateCart]);

    useEffect(() => {
        document.addEventListener(EventType.CLEAR_CART, onClearCart);
        return () => {
            document.removeEventListener(EventType.CLEAR_CART, onClearCart, false);
        }
    }, [onClearCart]);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, cartItem) => {
            total += (cartItem.salePrice ?? cartItem.price) * cartItem.quantity;
            return total;
        }, 0);
    }, [cartItems]);

    return {
        totalPrice,
        currency: 'USD',
        cartItems,
        openCart: () => document.dispatchEvent(new Event(EventType.OPEN_CART)),
        updateCart: (options) => document.dispatchEvent(
            new CustomEvent(EventType.UPDATE_CART, {
                detail: options
            })
        ),
        clearCart: () => document.dispatchEvent(new Event(EventType.CLEAR_CART)),
    };
};