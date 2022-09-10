import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    IconButton,
    Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { CartItem, CartItemProps } from './CartItem';
import { CartOrderSummary, CartOrderSummaryProps } from './CartOrderSummary';

export interface CartProps extends Omit<CartOrderSummaryProps, 'totalPrice'> {
    cartItems: CartItemProps['cartItem'][];
    currency: string;
    totalPrice: number;
    updateCart: CartItemProps['updateCart'];
    clearCart: () => void;
    goToCheckout: CartOrderSummaryProps['goToCheckout'];
    continueShopping: () => void;
}

export const Cart: React.FC<CartProps> = ({ cartItems, currency, totalPrice, updateCart, clearCart, goToCheckout, continueShopping }) => (
    <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
    >
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}
        >
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
                <Heading fontSize="2xl" fontWeight="extrabold">
                    Shopping Cart ({cartItems.length} items)
                    {cartItems.length > 0 && (
                        <IconButton
                            variant="ghost"
                            aria-label="Clear cart"
                            fontSize="24px"
                            icon={<FiTrash2 />}
                            onClick={() => clearCart()}
                        />
                    )}
                </Heading>
                <Stack spacing="6">
                    {cartItems.map((cartItem, key) => (
                        <CartItem
                            key={key}
                            cartItem={cartItem}
                            updateCart={updateCart}
                        />
                    ))}
                </Stack>
            </Stack>
            <Flex direction="column" align="center" flex="1">
                <CartOrderSummary
                    totalPrice={totalPrice}
                    currency={currency}
                    goToCheckout={goToCheckout}
                />
                <HStack mt="6" fontWeight="semibold">
                    <p>or</p>
                    <Button
                        variant="link"
                        color="blue.500"
                        onClick={continueShopping}
                    >
                        Continue shopping
                    </Button>
                </HStack>
            </Flex>
        </Stack>
    </Box>
);