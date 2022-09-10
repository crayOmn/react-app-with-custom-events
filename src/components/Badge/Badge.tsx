import {
    BadgeProps as BadgePropsBase,
    Box,
    HStack,
} from '@chakra-ui/react';
import * as React from 'react';

export interface BadgeProps extends BadgePropsBase {
    count: number;
}

export const Badge: React.FC<BadgeProps> = ({ count, children, ...nativeProps }) => {
    return (
        <HStack position="relative" {...nativeProps}>
            {children}
            <Box
                as={'sup'}
                css={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    minWidth: '20px',
                    lineHeight: '20px',
                    padding: '0 6px',
                    borderRadius: '10px',
                    transform: 'translate(50%,-50%)',
                    transformOrigin: '100% 0%',
                    fontSize: '12px',
                    textAlign: 'center',
                }}
                bg={'green'}
                color={'white'}
            >
                {count}
            </Box>
        </HStack>
    );
}