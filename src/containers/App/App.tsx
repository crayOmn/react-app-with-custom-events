import {
    Box,
    ChakraProvider,
    Container,
    Heading,
    Stack,
    theme,
} from '@chakra-ui/react';
import React from 'react';

import { ReactComponent as ReactIcon } from '../../logo.svg';
import { NavBar } from '../../components/NavBar';
import { ProductList } from '../../components/ProductList';
import { products } from '../../mocks';
import { Product } from '../../types';
import { AddToCartButtonContainer } from '../AddToCartButton';
import { CartContainer } from '../Cart';
import { ViewCartButtonContainer } from '../ViewCartButton';

export const App: React.FC = () => {
    const logo = (
        <Stack direction="row">
            <ReactIcon height="24px" />
            <Heading size="md" ml="5px">React Shop</Heading>
        </Stack>
    );

    return (
        <ChakraProvider theme={theme}>
            <NavBar
                logo={logo}
                rightContent={<ViewCartButtonContainer />}
            />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'}>
                    <ProductList
                        products={products}
                        renderAddToCartButton={(product: Product) => (
                            <AddToCartButtonContainer
                                product={product}
                            />
                        )}
                    />
                </Stack>
            </Box>
            <CartContainer />
        </ChakraProvider>
    );
}