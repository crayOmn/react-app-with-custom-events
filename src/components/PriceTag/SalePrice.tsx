import { Text, TextProps } from '@chakra-ui/react';
import * as React from 'react';

export const SalePrice: React.FC<TextProps> = (props) => (
    <Text as="span" fontWeight="semibold" color="gray.800" {...props} />
);