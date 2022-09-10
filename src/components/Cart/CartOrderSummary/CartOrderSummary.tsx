import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { PriceTag } from '../../PriceTag';
import { OrderSummaryItem } from './OrderSummaryItem';

export interface CartOrderSummaryProps {
    totalPrice: number;
    currency: string;
    goToCheckout: () => void;
}

export const CartOrderSummary: React.FC<CartOrderSummaryProps> = ({ totalPrice, currency, goToCheckout }) => (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
        <Stack spacing="6">
            <OrderSummaryItem label="Coupon Code">
                <Button variant="link" textDecor="underline">
                    Add coupon code
                </Button>
            </OrderSummaryItem>
            <Flex justify="space-between">
                <Text fontSize="lg" fontWeight="semibold">
                    Total
                </Text>
                <PriceTag
                    priceProps={{ fontSize: 'xl', fontWeight: 'extrabold' }}
                    price={totalPrice}
                    currency={currency}
                />
            </Flex>
        </Stack>
        <Button
            colorScheme="green"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
            onClick={goToCheckout}
        >
            Checkout
        </Button>
    </Stack>
);