import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';

export type OrderSummaryItemProps = {
    label: string;
    children: any;
}

export const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({ label, children }) => (
    <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color="gray.600">
            {label}
        </Text>
        {children}
    </Flex>
);