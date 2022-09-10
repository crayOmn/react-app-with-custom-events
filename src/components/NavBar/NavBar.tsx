import {
    Box,
    Flex,
} from '@chakra-ui/react';
import * as React from 'react';

export interface NavBarProps {
    logo: React.ReactNode;
    rightContent: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ logo, rightContent }) => (
    <Box bg="gray.50" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
            <Box>{logo}</Box>
            <Flex alignItems="center">
                {rightContent}
            </Flex>
        </Flex>
    </Box>
);