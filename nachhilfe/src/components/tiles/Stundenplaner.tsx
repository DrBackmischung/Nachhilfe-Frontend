import React from 'react';
import { Avatar, VStack, Box, Input, FormControl, Flex, Center } from 'native-base';

export const Example = () => {
    const date = new Date().toLocaleDateString()
	return (
        <>
            <FormControl w="75%" maxW="300px">
                <Input isDisabled={true} m={1}  placeholder={date}/>
                <FormControl.Label>Neuen Termin anbieten:</FormControl.Label>
                <Flex direction="row">
                    <Center size="5" bg="primary.100">1</Center>
                    <Center size="5" bg="primary.200" />
                    <Center size="5" bg="primary.300" />
                    <Center size="5" bg="primary.0" />
                    <Center size="5" bg="primary.0" />
                    <Center size="5" bg="primary.600">7</Center>
                    <Center size="5" bg="primary.500" />
                    <Center size="5" bg="primary.400" />
                    <Center size="5" bg="primary.300" />
                </Flex>
            </FormControl>
            {/* <Input isDisabled={true} m={1} placeholder="*********"/> */}
        </>
	);
};
