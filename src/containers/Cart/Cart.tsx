import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { Cart } from '../../components/Cart';
import { useCart } from '../../hooks/useCart';
import { EventType } from '../../types';

export const CartContainer: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { cartItems, totalPrice, currency, updateCart, clearCart } = useCart();

    useEffect(() => {
        document.addEventListener(EventType.OPEN_CART, onOpen);
        return () => {
            document.removeEventListener(EventType.OPEN_CART, onOpen, false);
        }
    }, [onOpen]);

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size="full">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                    <Cart
                        cartItems={cartItems}
                        currency={currency}
                        totalPrice={totalPrice}
                        updateCart={updateCart}
                        clearCart={clearCart}
                        goToCheckout={() => {}}
                        continueShopping={onClose}
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}