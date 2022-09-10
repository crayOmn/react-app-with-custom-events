import { Text, TextProps } from '@chakra-ui/react';
import * as React from 'react';

export interface PriceProps extends TextProps {
    isOnSale?: boolean;
}

export const Price: React.FC<PriceProps> = ({ isOnSale, children, ...rootProps }) => {
    const color = isOnSale ? 'gray.400' : 'gray.700';

    return (
        <Text
            as="span"
            fontWeight="medium"
            color={color}
            textDecoration={isOnSale ? 'line-through' : 'none'}
            {...rootProps}
        >
            {children}
        </Text>
    )
}