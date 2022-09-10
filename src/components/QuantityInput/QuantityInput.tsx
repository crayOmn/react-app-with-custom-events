import { Button, HStack, Input, NumberInputProps, useNumberInput } from '@chakra-ui/react';
import * as React from 'react';

export const QuantityInput: React.FC<NumberInputProps> = (props) => {

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            ...props,
            step: 1,
            precision: 0,
            min: 0,
        });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps({ readOnly: true });

    return (
        <HStack
            maxW="160px"
            aria-label="Select quantity"
        >
            <Button {...dec}>-</Button>
            <Input {...input} />
            <Button {...inc}>+</Button>
        </HStack>
    );
}