import {
    Image,
    Skeleton,
    Stack,
    Text,
} from '@chakra-ui/react';
import * as React from 'react';

export type CartProductMetaProps = {
    imageUrl: string;
    name: string;
}

export const CartProductMeta: React.FC<CartProductMetaProps> = ({ imageUrl, name }) => (
    <Stack direction="row" spacing="5" width="full" align="center">
        <Image
            boxSize="150px"
            fit="contain"
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            objectPosition="center"
        />
        <Text fontWeight="medium">{name}</Text>
    </Stack>
);